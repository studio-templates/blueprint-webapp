import React from 'react';
import styles from './banner.module.scss'
import { Card } from '../card/card';
import { Icon } from '../icon/Icon';

export interface BannerProps {
    className?: string;
}

export const Banner: React.FC<BannerProps> = ({ className }) => {
    return <div className={styles.root}>
        <Card className={styles.card}>
            <Icon icon="cloud" iconSize={100} className={styles['bcrd-icon']} />
            <div className={styles.label}>
                <h1>Get great loan!<Icon icon="chevron-right" color={'white'} className={styles.icon} iconSize={22} />
                </h1></div></Card>
    </div>;
};