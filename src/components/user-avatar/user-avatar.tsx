import React from 'react';
import styles from './user-avatar.module.scss'
import { Icon } from '../icon/Icon';

export interface UserAvatarProps {
    className?: string;
    backgroundImage?: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ className }) => {
    return <div className={styles.root}>
        <div className={styles.head} />
        <div className={styles.avatarbody}></div></div>;
};