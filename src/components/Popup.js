import React from 'react';
import Paragraph from './Paragraph';
import Closeicon from '../close.png';

const Popup = ({popup}) => {
    const hidePopup = () => {
        popup(false)
    }
    return (
        <div className='popup'>
            <div className='popup-content'>
                <div className='text-right'>
                    <button onClick={hidePopup}>
                        <img src={Closeicon} alt='close icon' className='close-icon' />
                    </button>
                </div>
                <h4>Electronic Heath Records</h4>
                <Paragraph color='text-white' spacing='mt-2 mb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Paragraph>
            </div>
        </div>
    )
}

export default Popup;
