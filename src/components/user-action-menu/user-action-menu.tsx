import React from 'react';
import styles from './user-action-menu.module.scss'
import { UserAvatar } from '../user-avatar/user-avatar';
import { Icon } from '../icon/Icon';

export interface UserActionMenuProps {
    className?: string;
    userName?: string;
    role?: string;

}

export const UserActionMenu: React.FC<UserActionMenuProps> = ({ className, userName, role }) => {
    return <div className={styles.root}>
        <Icon icon={'envelope'} className={styles.icon} iconSize={20} />
        <Icon icon={'notifications'} className={styles.icon} iconSize={20} />
        <UserAvatar></UserAvatar>
        <div className={styles.UserNameAndRole}>
            <div> {userName}</div>
            <div className={styles.role}>
                {role}
            </div>
        </div>
    </div>;
};