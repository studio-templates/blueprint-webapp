import React from 'react';
import styles from './icon-card.module.scss'
import { Card } from '../card/card';
import { Icon } from '../icon/Icon';

export interface IconCardProps {
    className?: string;
}

export const IconCard: React.FC<IconCardProps> = ({ className }) => {
    return <div className={styles.root}>
        <Card className={styles.IconCard}>
            <Icon icon="shopping-cart" />
        </Card></div>;
};