import React from "react";
import styles from "./upgrade-to-premium-container.module.scss";
import Comp from "../give-your-money-logo/logo.svg";
import { Button } from "../button/button";
import { Icon } from "../icon/Icon";
import { GiveYourMoneyLogo } from '../give-your-money-logo/give-your-money-logo';

export interface UpgradeToPremiumContainerProps {
    className?: string;
}

export const UpgradeToPremiumContainer: React.FC<
    UpgradeToPremiumContainerProps
> = ({ className }) => {
    return (
        <div className={`${styles.root} ${styles.icon}`}>
            <GiveYourMoneyLogo className={styles.icon} />

            <div className={styles.button}>
                Upgrade to premium
                <Icon icon="arrow-up" />
            </div>
        </div>
    );
};
