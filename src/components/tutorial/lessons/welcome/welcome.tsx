import React from 'react';
import wcsLogo from '../../assets/wcs.svg';
import styles from './welcome.module.scss'

export interface WelcomeProps {
    
}

export const Welcome: React.FC<WelcomeProps> = ({}) => {
    return (
        <div className={styles.content}>
            <img className={styles.logo} src={wcsLogo} />
            <h1>Getting Started with <br/>Wix Component Studio</h1>
            <p>
                In this tutorial, you'll learn everything you need to know<br/>
                to start creating and editing components visually.
            </p>
            <span></span>
            <p>Click play button below to begin</p>
        </div>
    )
};

Welcome.displayName = 'Welcome';