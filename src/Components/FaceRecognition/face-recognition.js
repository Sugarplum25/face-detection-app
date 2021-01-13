import React from 'react';
import nextId from "react-id-generator";

import './face-recognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    const boundingBoxes = box.map((box) => {
        return (
            <div 
                key ={nextId()} 
                className="face-bound" 
                style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}
                >                
            </div>
        )
    });
    return(
        <div className="face-container">
            <img id="inputImage" className="face" src={imageUrl} alt="" />
            {boundingBoxes}
        </div>
    )
};

export default FaceRecognition;