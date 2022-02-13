import React from 'react';
import { ProductItem } from '../product-item/product-item';
import styles from './landing-page.module.scss';


export interface LandingPageProps {
    className?: string;
}

export const LandingPage: React.FC<LandingPageProps> = ({     
    ...props
}) => {
    return (
        <div className={styles.screen}>
            
            <div className={styles.left}>
                <div className={styles.logo}>
                    <img className={styles['logo-image']} src="https://i.ibb.co/rt9BTyB/Screen-Shot-2022-02-09-at-17-22-11.png" />
                    <span>Itai's Coffee</span>
                </div>
                <div className={styles.title}>
                    Coffee shop in the heart of Tel-Aviv.
                </div>
                <div className={styles.subtitle}>
                    Itai’s Coffe was created for those who appriciate delicious and high-quality coffe.
                </div>
            </div>

            <div className={styles.right}>
                <span className={styles['product-screen']}>
                    <ProductItem />
                </span>
            </div>

            <div className={styles.stripe}/>
        </div>
    )
};