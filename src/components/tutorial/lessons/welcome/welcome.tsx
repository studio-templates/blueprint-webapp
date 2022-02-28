import React from 'react';
import styles from './welcome.module.scss'

export interface WelcomeProps {
    
}

export const Welcome: React.FC<WelcomeProps> = ({}) => {
    return (
        <div>
            <h1>welcome</h1>
        </div>
    )
};

Welcome.displayName = 'Welcome';