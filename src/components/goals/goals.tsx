import React from 'react';
import styles from './goals.module.scss'
import { ShadowCard } from '../shadow-card/shadow-card';

export interface GoalsProps {
    className?: string;
}

export const Goals: React.FC<GoalsProps> = ({ className }) => {
    return <div className={styles.root}>
        <ShadowCard>
            <h2 className={styles.price}>Heading 2</h2>
            <h3>Heading 3</h3></ShadowCard></div>;
};