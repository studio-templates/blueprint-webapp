import React from 'react';
import {Elevation, H1, H5, H6, Card} from "@blueprintjs/core";
import defaultImg from './assets/img-1.jpg';
import './gift-card.scss';


export interface GiftCardProps { 
    imgSrc?: string
}

export const GiftCard: React.FC<GiftCardProps> = ({      
    imgSrc = defaultImg,
    ...props
}) => {

    return (
        <Card className='card wrapper' elevation={Elevation.FOUR}>
            <img src={imgSrc} /> 
            <Card className='card body'>
                <H1 className='typo title'>LASHES & HAIR EXTENTIONS</H1>
                <H5 className='typo desc'>
                    Donec faucibus, ante ut ultrices commodo, magna ex maximus, sodales neque dolor vitae arcu. 
                    Nam euismod, neque quis laoreet interdum. Sed magna est, dictum at faucibus. 
                </H5>
                <Card className='card promo'>
                    <H6 className='typo promo email'>EMAIL | <br/> INFO@MYSITE.COM</H6>
                    <H1 className='typo promo'>$50</H1>
                </Card>                
            </Card>
        </Card>
    )
};


 