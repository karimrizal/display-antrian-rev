import { ArrowLeftIcon, BackspaceIcon, CameraIcon } from '@heroicons/react/outline';
import React from 'react'
import { useState } from 'react';
import { useAlert } from 'react-alert';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import camera from '../components/camera'
import { url_camera_sound, url_upload } from '../components/constant';
import "../custom.css"

let imageCapture;

const onGetUserMediaButtonClick = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((mediaStream) => {
            document.querySelector('video').srcObject = mediaStream;

            const track = mediaStream.getVideoTracks()[0];
            imageCapture = new ImageCapture(track);
        })
        .catch((error) => console.error(error));
}

const onGrabFrameButtonClick = () => {
    imageCapture.grabFrame()
        .then((imageBitmap) => {
            const canvas = document.querySelector('#grabFrameCanvas');
            drawCanvas(canvas, imageBitmap);
        })
        .catch((error) => console.error(error));
}

const onTakePhotoButtonClick = (alert, navigate, setIsLoading) => {
    setIsLoading(true);
    imageCapture.takePhoto()
        .then((blob) => {
            let imageBitmap = createImageBitmap(blob);
            var fd = new FormData();
            



            // append the blob to a multipart form
            fd.append('fileToUpload', blob, 'snapshot.png');

            // send the form to the server using ajax
            // fetch('http://localhost/display-antrian/upload2.php', {method: 'post', body: fd});
            fetch(url_upload, {
                method: 'POST',
                body: fd
            })
                .then((response) => response.text())
                .then((result) => {
                    console.log('Success:', result);
                    alert.success(`${result} berhasil terdaftar, silahkan menunggu panggilan`);
                    setTimeout(() => { navigate("/"); }, 3000);

                })
                .catch((error) => {
                    console.error('Error:', error);
                });

            // const canvas = document.querySelector('#takePhotoCanvas');
            // drawCanvas(canvas, imageBitmap);

            let audio = new Audio(url_camera_sound);
            audio.play();
            document.querySelector('#vid').pause();
            return imageBitmap;

        }
        )
        .then((imageBitmap) => {
            const canvas = document.querySelector('#takePhotoCanvas');
            drawCanvas(canvas, imageBitmap);
        })
        .catch((error) => console.error(error));

}

/* Utils */

const drawCanvas = (canvas, img) => {
    canvas.width = getComputedStyle(canvas).width.split('px')[0];
    canvas.height = getComputedStyle(canvas).height.split('px')[0];
    let ratio = Math.min(canvas.width / img.width, canvas.height / img.height);
    let x = (canvas.width - img.width * ratio) / 2;
    let y = (canvas.height - img.height * ratio) / 2;
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height,
        x, y, img.width * ratio, img.height * ratio);
}

// document.querySelector('video').addEventListener('play', () => {
//   document.querySelector('#grabFrameButton').disabled = false;
//   document.querySelector('#takePhotoButton').disabled = false;
// });


function Daftar() {
    onGetUserMediaButtonClick();
    const navigate = useNavigate();
    const alert = useAlert();
    const [isLoading, setIsLoading] = useState(false);



    return (
        <div style={{ display: "flex", alignContent: "center", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <div id="results" style={{ border: "1px dashed #a7a7a7", width: "700px", borderRadius: 10, display: "flex", alignContent: "center", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <h1>Perhatikan Kamera</h1>
                <div>
                    <video id="vid" autoPlay style={{ backgroundColor: "black" }} />
                    {/* <button id="getUserMediaButton" onClick={onGetUserMediaButtonClick}  >Get User Media</button> */}
                </div>
                {/* <div>
                <canvas id="grabFrameCanvas" />
                <button id="grabFrameButton" onClick={onGrabFrameButtonClick}>Grab Frame</button>
            </div> */}
                <div style={{ display: "flex", alignContent: "flex-end", justifyContent: "space-between", width: 370, alignSelf: "flex-end", marginRight: 30, marginTop: 10, marginBottom: 10 }} >
                    <canvas id="takePhotoCanvas" style={{ display: "none" }} />
                    <Link to="/" >
                        <button disabled={isLoading} className="flex items-center justify-center px-2 py-2 rounded-xl shadow-sm text-base font-medium text-white bg-blue hover:bg-yellow hover:text-pst" >
                            <ArrowLeftIcon className="text-white h-6 w-6" style={{ marginRight: 10 }} aria-hidden="true" />Batal Antri
                        </button>
                    </Link>
                    <button id="takePhotoButton" onClick={() => { onTakePhotoButtonClick(alert, navigate, setIsLoading); }}
                        disabled={isLoading}
                        className="flex items-center justify-center px-2 py-2 rounded-xl shadow-sm text-base font-medium text-white bg-blue hover:bg-yellow hover:text-pst">
                        <div className="flex items-center justify-center" style={{ marginRight: 10, display: isLoading?"flex":"none" }} >
                            <div className="w-5 h-5 border-b-2 border-gray-900 rounded-full animate-spin"></div>
                        </div>
                        <CameraIcon className="text-white h-6 w-6" style={{ marginRight: 10, display: isLoading? "none":"flex" }} aria-hidden="true" />Ambil Foto dan Antrian
                    </button>



                </div>
            </div>


        </div>
    )
}

export default Daftar