import React from 'react';
import styles from './lesson01.module.scss'

export interface Lesson01Props {
    
}

export const Lesson01: React.FC<Lesson01Props> = ({}) => {
    return (
        <div>
            <h1>Lesson One</h1>
        </div>
    )
};

Lesson01.displayName = 'Lesson 1';