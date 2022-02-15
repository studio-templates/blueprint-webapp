import React from 'react';
import styles from './shadow-card.module.scss'

export interface ShadowCardProps {
    className?: string;
}

export const ShadowCard: React.FC<ShadowCardProps> = ({ className }) => {
    return <div className={`${styles.root} ${styles.shadow}`}>ShadowCard</div>;
};