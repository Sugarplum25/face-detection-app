import React from 'react';

import './image-link-form.css';

const ImageLinkForm = ({ change, submit }) => {
    return (
        <form className="image-form" onSubmit={submit}>
            <p className="image-form__text">
            {`This is Magic Brain will detect faces 
            in your pictures. Give it a try!`}
            </p>
            <div className="image-form__wrapper">
                <label className="image-form__label">Paste link here:</label>
                <input type="text" className="image-form__input" onChange={change}></input>
                <button className="image-form__button" type="submit">Detect</button>
            </div>
        </form>

    )
};

export default ImageLinkForm;