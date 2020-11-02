import React from 'react';

const PopupBtn = ({ children, popup }) => {
    const showPopup = () => {
        popup(true)
    }
    return (
        <a className='d-flex justify-content-center p-3 bg-white text-decoration-none box-shadow' role="button" onClick={showPopup}>{children}</a>
    )
}

export default PopupBtn;
