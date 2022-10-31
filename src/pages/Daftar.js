import { ArrowLeftIcon, BackspaceIcon, CameraIcon } from '@heroicons/react/outline';
import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useAlert } from 'react-alert';
import Countdown from 'react-countdown';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import camera from '../components/camera'
import { url_camera_sound, url_image, url_upload } from '../components/constant';
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
                    alert.success(<div style={{display: "flex"}}>
                        <img style={{width:200, marginRight: 10}} src={url_image+result.split(",")[1]} />
                        <p><span style={{color: "red"}}>{result.split(",")[0]}</span> berhasil terdaftar, silahkan menunggu panggilan</p>
                    </div>);
                    setTimeout(() => { navigate("/"); }, 3000);

                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert.error(`Terjadi error, silahkan melakukan antrian ulang ${error}`);
                    setTimeout(() => { navigate("/"); }, 3000);
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


function Daftar() {
    onGetUserMediaButtonClick();
    const navigate = useNavigate();
    const alert = useAlert();
    const [isLoading, setIsLoading] = useState(false);
    const cdref = useRef(null);
    const [showCd, setShowCd] = useState(false);




    return (
        <section className=" bg-gradient-to-r from-gradient3/30 via-gradient2/80 to-gradient1/40 ...">
            <Link to="/" style={{ position: "absolute", top: 10, left: 10, display: "flex" }} className="custombutton"><ArrowLeftIcon className="text-black h-6 w-6" style={{ marginRight: 10 }} aria-hidden="true" /> Back</Link>
        <div style={{ display: "flex", alignContent: "center", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <div id="results" style={{ border: "1px dashed #a7a7a7", width: "80%", maxWidth: "1000px", borderRadius: 10, display: "flex", alignContent: "center", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                {/* <h1>Perhatikan Kamera</h1> */}
                <Countdown 
                    date={Date.now() + 3000}
                    renderer={props => <div style={{display: showCd?"flex":"none", flexDirection: "column", justifyContent:"center", alignItems: "center"}} className="font-medium text-4xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><h1>Perhatikan Kamera</h1><p>{props.seconds}</p> </div>} 
                    ref={cdref}
                    autoStart={false}
                    onComplete={()=>{
                        console.log("Complete cd");
                        // console.log("wow");
                        // alert.show("WOW"); 
                        onTakePhotoButtonClick(alert, navigate, setIsLoading); setShowCd(false);
                    }}
                />,
                <div style={{width: "100%", display: "grid", gridTemplateColumns: "1fr"}}>
                    <video  id="vid" autoPlay style={{ backgroundColor: "black", width: "100%", gridRowStart: 1, gridColumnStart: 1 }} className='dashcam' />
                    {/* <button id="getUserMediaButton" onClick={onGetUserMediaButtonClick}  >Get User Media</button> */}
                    <div style={{width: "100%", height: "100%", gridRowStart: 1, gridColumnStart: 1, display: "flex", justifyContent: "center", alignItems: "center"}} 
                        // className="font-medium text-4xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                        <div style={{height: "95%", aspectRatio: "1", borderRadius: "100%", boxShadow: "0 0 100px 0px rgb(0 0 0 / 70%)"}}>
                            {/* <h1>WxOW</h1>  */}
                        </div>
                    </div>
                </div>
                {/* <div>
                <canvas id="grabFrameCanvas" />
                <button id="grabFrameButton" onClick={onGrabFrameButtonClick}>Grab Frame</button>
            </div> */}
                <div style={{ display: "flex", alignContent: "flex-end", justifyContent: "space-between", alignSelf: "center", marginTop: 10, marginBottom: 10 }} >
                    <canvas id="takePhotoCanvas" style={{ display: "none" }} />
                    {/* <Link to="/" >
                        <button disabled={isLoading} className="flex items-center justify-center px-2 py-2 rounded-xl shadow-sm text-base font-medium text-white bg-blue hover:bg-yellow hover:text-pst" >
                            <ArrowLeftIcon className="text-white h-6 w-6 hover:bg-yellow hover:text-pst" style={{ marginRight: 10 }} aria-hidden="true" />Batal Antri
                        </button>
                    </Link> */}
                    <button id="takePhotoButton" onClick={() => { cdref.current.start(); setIsLoading(true); setShowCd(true) }}
                        disabled={isLoading}
                        className="flex items-center justify-center px-2 py-2 rounded-xl shadow-sm text-base font-medium text-white bg-blue hover:bg-yellow hover:text-pst">
                        <div className="flex items-center justify-center" style={{ marginRight: 10, display: isLoading?"flex":"none" }} >
                            <div className="w-5 h-5 border-b-2 border-gray-900 rounded-full animate-spin"></div>
                        </div>
                        <CameraIcon className="text-white h-6 w-6 hover:bg-yellow hover:text-pst" style={{ marginRight: 10, display: isLoading? "none":"flex" }} aria-hidden="true" />Ambil Foto dan Antrian
                    </button>



                </div>
            </div>


        </div>
    </section>
    )
}

export default Daftar