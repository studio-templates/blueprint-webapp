import React from 'react';
import {Elevation, Button, Card, InputGroup, H1} from "@blueprintjs/core";
import { ProductItem } from '../product-item/product-item';
import logo from './assets/logo.svg'; 
import styles from './landing-page.module.scss';


export interface LandingPageProps {
    className?: string;
    title?: string;
    subTitle?: string;
    videoURL?: string;
}

export const LandingPage: React.FC<LandingPageProps> = ({  
    title = 'Coffee for thought',
    subTitle =  'Alaskan made. Santa approved. The best grain, the finest roast, the most powerful flavor.',
    videoURL =  'https://video.wixstatic.com/video/68d3a9_d6f59c533b0e49cf8e44e6ff23ace28a/1080p/mp4/file.mp4',
    ...props
}) => {
    return (        
        <div className={styles.page}>        
            {/*video background*/}        
            <div className={styles.videoBG}>
                <video className={styles.video} autoPlay muted loop preload='auto'>
                    <source src={videoURL} type="video/mp4"/>  
                </video>
            </div>
            {/*content*/}
            <div className={styles.content}>
                <div className={styles.cols}>
                    <img className={styles.logo} src={logo}/> 
                    <p className={styles.title}>{title}</p> 
                    <p className={styles.subtitle}> {subTitle}</p>
                </div>
                <ProductItem className={styles['product-screen']}/>
            </div> 
           
            <div className={styles.me}>
                <svg viewBox="0 0 300 200" width="100%" height="100%" preserveAspectRatio="none">
                    <path d="M 0,200 L 300,0 L 300,200 z"></path>
                </svg> 
            </div>
            
        </div>
               
    )
};