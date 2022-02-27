import React from 'react';
import styles from './nivi.module.scss'

export interface NiviProps {
    className?: string;
}

export const Nivi: React.FC<NiviProps> = ({ className }) => {
    return <div className={styles.root}>
        <img src="http://www.studentuniverse.com/blog/wp-content/uploads/2014/04/Santorini-Greece.jpg" className={styles.image} />Nivi</div>;
};