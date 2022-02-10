import React from 'react';
import {Elevation, H1, H5, H6, Card} from "@blueprintjs/core";
import defaultImg from './assets/img-1.jpg';
import styles from './gift-card.module.scss';


export interface GiftCardProps { 
    imgSrc?: string
}

export const GiftCard: React.FC<GiftCardProps> = ({      
    imgSrc = defaultImg,
    ...props
}) => {

    return (
        <Card className={'${styles.card} ${styles.wrapper}'} elevation={Elevation.FOUR}>
            <img src={imgSrc} /> 
            <Card className={'${styles.card} ${styles.body}'}>
                <H1 className={'${styles.typo} ${styles.title}'}>LASHES & HAIR EXTENTIONS</H1>
                <H5 className={'${styles.typo} ${styles.desc}'}>
                    Donec faucibus, ante ut ultrices commodo, magna ex maximus, sodales neque dolor vitae arcu. 
                    Nam euismod, neque quis laoreet interdum. Sed magna est, dictum at faucibus. 
                </H5>
                <Card className={'${styles.card} ${styles.promo}'}>
                    <H6 className={'${styles.typo} ${styles.promo} ${styles.email}'}>EMAIL | <br/> INFO@MYSITE.COM</H6>
                    <H1 className={'${styles.typo} ${styles.promo}'}>$50</H1>
                </Card>                
            </Card>
        </Card>
    )
};


 