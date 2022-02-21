import React from 'react';
import styles from './card-goal.module.scss'
import { Icon } from '../icon/Icon';

export interface CardGoalProps {
    className?: string;
    price?: number;
    date?: string;
    icon?: string;
    subject?: string;
    icontype?: string;

}

export const CardGoal: React.FC<CardGoalProps> = ((props) => {
    const { date,
        price,
        subject,
        icontype

    } = props;
    return <div className={styles.root}>
        <div className={`${styles.background}`}>
            <div className={styles.root}>
                <div className={`${styles.HeadLineGoal} ${styles.GeneralTextStuff}`}>$
                    {price}
                </div>
                <div className={`${styles.DateGoals} ${styles.GeneralTextStuff}`}>{date}</div>
                <div className={`${styles.GeneralTextStuff} ${styles.Division}`}>
                    <Icon icon={icontype} className={styles.icon} iconSize={40} color="#7CB4F9" /></div>
                <div className={`${styles.GeneralTextStuff} ${styles.Division} ${styles.Division2}`}>{subject}<div />
                </div>
            </div>
        </div></div>;
});