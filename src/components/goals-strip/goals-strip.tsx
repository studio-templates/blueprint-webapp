import React from 'react';
import styles from './goals-strip.module.scss'
import { Goal } from '../goal/goal';

export interface GoalsStripProps {
    className?: string;
}

export const GoalsStrip: React.FC<GoalsStripProps> = ({ className }) => {
    return <div className={styles.root}>
        <Goal goal={{
            category: 'Xbox',
            date: '12/20/20',
            price: 220,
            icon: 'airplane'
        }} />
        <Goal goal={{
            category: 'Renovation',
            date: '12/20/20',
            icon: 'add',
            price: 200
        }} />
        <Goal goal={{
            category: 'Holiday',
            date: '12/20/20',
            icon: 'add',
            price: 155
        }} /></div>;
};