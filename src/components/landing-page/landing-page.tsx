import React from 'react';
import { ProductItem } from '../product-item/product-item';
import styles from './landing-page.module.scss';
import defaultLogo from './assets/logo.svg'; 

export interface LandingPageProps {
    className?: string;    
    title?: string;
    subTitle?: string;
    logoURL?: string;
    videoURL?: string;
    posterURL?: string;
}

export const LandingPage: React.FC<LandingPageProps> = ({  
    title = 'Coffee for thought',
    logoURL = defaultLogo,
    subTitle =  'Alaskan made. Santa approved. The best grain, the finest roast, the most powerful flavor.',
    videoURL =  'https://video.wixstatic.com/video/68d3a9_d6f59c533b0e49cf8e44e6ff23ace28a/1080p/mp4/file.mp4', 
    posterURL = 'https://static.wixstatic.com/media/68d3a9_d6f59c533b0e49cf8e44e6ff23ace28af000.jpg',
}) => {
    return (        
        <div className = {styles.page}>   
            <div className = {styles.videoBG}>
                <video className = {styles.vContent} poster={posterURL} autoPlay muted loop preload='auto'>
                    <source src = {videoURL} type="video/mp4"/>  
                </video>
            </div>
            <div className = {styles.content}>
                <div className = {styles.cols}>
                    <img className = {styles.logo} src={logoURL}/> 
                    <p className = {styles.title}>{title}</p> 
                    <p className = {styles.subtitle}> {subTitle}</p>
                </div>
                <ProductItem/>
            </div> 
            <div className = {styles.divider}>
                <svg viewBox = '0 0 300 200' width = '100%' height = '100%' preserveAspectRatio = 'none'>
                <path d="M 0,200 C 0,200 300,200 300,0 L 300,200 z"></path>
                </svg> 
            </div>
        </div>
               
    )
};