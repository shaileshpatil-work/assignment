import React from 'react';
import Closeicon from '../close.png';
import Card from './Card';

const Popup = ({popup, cards}) => {
    const hidePopup = () => {
        popup(false)
    }
    
    return (
        <div className='popup'>
            <div className='popup-content'>
                <div className='text-right mb-2'>
                    <button onClick={hidePopup}>
                        <img src={Closeicon} alt='close icon' className='close-icon' />
                    </button>
                </div>
                <div className='row'>
                    {
                        cards.map((card) => {
                            return (
                                <div className='col-sm-6 mb-0 mb-3' key={card.id}>
                                    <Card title={card.title} subTitle={card.subTitle} highlight={card.highlight} link={card.link} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Popup;
