import React from 'react';
import styles from './membership-indicator.module.scss'
import { Text } from '../text/text';
import { Icon } from '../icon/Icon';

export interface MembershipIndicatorProps {
    className?: string;
}

export const MembershipIndicator: React.FC<MembershipIndicatorProps> = ({ className }) => {
    return <div className={styles.root}>
        <div className={`${styles.root} ${styles.container}`}>
            <div className={styles.icon}>
                <Icon icon="envelope" className={styles.innerIcon} />
            </div>
            <div className={styles.icon}>
                <Icon icon="notifications" />
            </div>
            <div className={`${styles.icon} ${styles.iconLast}`}>
                <div className={styles.personFrame}>
                    <Icon icon="person" />
                </div>
            </div>
            <div className={styles.textContainer}>
                <Text className={styles.userName}>Andrew</Text>
                <Text className={styles.userType}>Admin Account</Text>
            </div>
        </div>
    </div>;
};