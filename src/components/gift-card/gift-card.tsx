import React from 'react';
import {Elevation, H1, H5, H6, Card} from "@blueprintjs/core";
import defaultPhotoURL from './assets/img-1.jpg';
import styles from './gift-card.module.scss';

export interface GiftCardProps { 
    photoURL?: string;
    full?: boolean

}

/**
 * This Gift Card component is a simple demo component to showcase the capabilities of Wix Component Studio, 
 * it is a basic implementation, which is not meant to be utilized in a production environment.
 * 
 * Use this demo to get a feel for how easy and fun it is to create and edit components in WCS using Blueprint.js, a 3rd party React-based UI toolkit.
 * 
 */
export const GiftCard: React.FC<GiftCardProps> = ({      
    photoURL = defaultPhotoURL,
    full = false

}) => {
    return (
        <Card className={`${styles.card}${full ? ` ${styles.full}` : '' }`} elevation={Elevation.FOUR}>
            <img src={photoURL} /> 
            <div className={styles['card-body']}>
                <H1 className={styles.title}>LASHES & HAIR EXTENTIONS</H1>
                <H5 className={styles.desc}>
                    Donec faucibus, ante ut ultrices commodo, magna ex maximus, sodales neque dolor vitae arcu. 
                    Nam euismod, neque quis laoreet interdum. Sed magna est, dictum at faucibus. 
                </H5>
                <div className={styles.promo}>
                    <H6 className={styles.email}>EMAIL | <br/> INFO@MYSITE.COM</H6>
                    <H1 className={styles.price}>$50</H1>
                </div>                
            </div>
        </Card>
    )
};