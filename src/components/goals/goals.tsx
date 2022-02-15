import React from 'react';
import styles from './goals.module.scss'
import { ShadowCard } from '../shadow-card/shadow-card';

export interface GoalsProps {
    className?: string;
}

export const Goals: React.FC<GoalsProps> = ({ className }) => {
    return <div className={styles.root}>
        <ShadowCard /></div>;
};