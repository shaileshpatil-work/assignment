import React from 'react';
import HighLightText from './HighlightText';
import Paragraph from './Paragraph';
import SubHeading from './SubHeading';

const Card = ({ title, subTitle, highlight, link }) => {
    return (
        <div className='card card-wrapper box-shadow h-100'>
            <a href={link} className='text-decoration-none' target='_blank' rel='noreferrer' >
                <div className='card-body text-center'>
                    <SubHeading>{title}</SubHeading>
                    <Paragraph spacing={'mb-1'}>{subTitle}</Paragraph>
                    <HighLightText color='highligtContent'>{highlight}</HighLightText>
                </div>
            </a>            
        </div>
    )
}

export default Card;
