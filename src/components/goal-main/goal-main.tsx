import React from 'react';
import styles from './goal-main.module.st.css'

export interface GoalMainProps {
    className?: string;
}

export const GoalMain: React.FC<GoalMainProps> = ({ className }) => {
    return <div className={styles.root}>GoalMain</div>;
};