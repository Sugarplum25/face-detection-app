import React from 'react';

import './image-link-form.css';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return (
        <div className="image-form">
            <p className="image-form__text">
            {`This is Magic Brain will detect faces 
            in your pictures. Give it a try!`}
            </p>
            <div className="image-form__wrapper">
                <label className="image-form__label">Paste link here:</label>
                <input type="text" className="image-form__input" onChange={onInputChange}></input>
                <button className="image-form__button" type="submit" onClick={onSubmit}>Detect</button>
            </div>
        </div>

    )
};

export default ImageLinkForm;