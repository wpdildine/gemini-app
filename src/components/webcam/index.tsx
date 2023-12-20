// @ts-ignore
import Webcam from "react-webcam";
import React from "react";

const WebcamCapture = () => {

    return (
        <>
            <Webcam videoConstraints={{width: 320, height: 240}} audio={false}  />
        </>
    );
};
export default WebcamCapture