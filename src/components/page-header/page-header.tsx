import React from 'react';
import styles from './page-header.module.scss'
import { MembershipIndicator } from '../membership-indicator/membership-indicator';
import { Text } from '../text/text';
import MembershipIndicator_module_scss from '../membership-indicator/membership-indicator.module.scss';

export interface PageHeaderProps {
    className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ className }) => {
    return <div className={styles.root}>
        <div className={MembershipIndicator_module_scss.container}>
            <div className={MembershipIndicator_module_scss.textContainer}>
                <Text>
                    Weekly Warmup
                </Text>
                <Text>
                    Get summary of your weekly online transactions here.
                </Text></div>
            <MembershipIndicator />
        </div></div>;
};