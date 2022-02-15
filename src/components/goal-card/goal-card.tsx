import React from 'react';
import styles from './goal-card.module.scss'
import { Icon } from '../icon/Icon';
import { IconName } from "@blueprintjs/icons";

export interface GoalCardProps {
    className?: string;
    price: number;
    date: string;
    icon: IconName;
    category: string;
}

export const GoalCard: React.FC<GoalCardProps> = ({ className, price, date, icon, category }) => {
    return <div className={styles.root}>
        <div className={styles.GoalCard}>
            <div className={styles.Price}>{price}</div>
            <div className={styles.Date}>{date}</div>
            <div className={styles.category}>
                <div className={styles.Icon}>
                    <Icon icon={icon} className={styles.Icon} size={35} color={'#70A6E8'} />
                </div>
                <div className={styles.CategoryText}>{category}</div>
            </div></div></div>;
};