import React from 'react'
import Webcam from 'react-webcam';
import camera from '../components/camera'

// camera.startCamera();

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  
  const WebcamCapture = () => (
    <Webcam
      audio={false}
      height={720}
      screenshotFormat="image/jpeg"
      width={1280}
    //   videoConstraints={videoConstraints}
    >
      {({ getScreenshot }) => (
        <button
          onClick={() => {
            const imageSrc = getScreenshot()
          }}
        >
          Capture photo
        </button>
      )}
    </Webcam>
  );


function Daftar() {
  return (
    <>
    <WebcamCapture/>
    {/* <button onClick={()=>{camera.startCamera();}} >Activate Camera</button>
    <button onClick={()=>{camera.takeSnapshot();}} >Snapshot</button>
    <div id="video" style={{width: 100, height:100, border: "1px solid black"}}>

    </div>
    <div id="canvas" style={{width: 100, height:100, border: "1px solid black"}}>

    </div> */}
    {/* <form action="http://localhost/display-antrian/upload.php" method="post" encType="multipart/form-data">
        Select image to upload:
        <input type="text" name="bmnid" id="bmnid" />
        <input type="file" accept="image/*" capture name="fileToUpload" id="fileToUpload" />
        <input type="submit" defaultValue="Upload Image" name="submit" />
        <div id="video" style={{width: 100, height:100, border: "1px solid black"}}>

        </div>
        <div id="canvas" style={{width: 100, height:100, border: "1px solid black"}}>

        </div>
        
      </form> */}
    </>
  )
}

export default Daftar