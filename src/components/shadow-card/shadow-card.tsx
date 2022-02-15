import React from 'react';
import styles from './shadow-card.module.scss'

export interface ShadowCardProps {
    className?: string;
    title?:string;
}

export const ShadowCard: React.FC<ShadowCardProps> = ({ className, title }) => {
    return <div className={`${styles.root} ${styles.shadow} ${styles.spacing}`}>
       {title &&<h3>{title}</h3>} 
    </div>;
};