import React from "react";
import styles from "./membership-indicator.module.scss";
import { Text } from "../text/text";
import { Icon } from "../icon/Icon";

export interface MembershipIndicatorProps {
  className?: string;
  userName: string;
  userType: string;
  envelopeIndication: boolean;
  notificationsIndication: boolean;
}

export const MembershipIndicator: React.FC<MembershipIndicatorProps> = ({
  className,
  userName,
  userType,
  envelopeIndication,
  notificationsIndication,
}) => {
  return (
    <div className={styles.root}>
      <div className={`${styles.root} ${styles.container}`}>
        <div className={styles.icon}>
          {envelopeIndication && <div className={styles.indicator} />}
          <Icon icon="envelope" className={styles.innerIcon} />
        </div>
        <div className={styles.icon}>
          {notificationsIndication && <div className={styles.indicator} />}
          <Icon icon="notifications" className={styles.innerIcon}></Icon>
        </div>
        <div className={`${styles.icon} ${styles.iconLast}`}>
          <div className={styles.personFrame}>
            <Icon icon="person" />
          </div>
        </div>
        <div className={styles.textContainer}>
          <Text className={styles.userName}>{userName}</Text>
          <Text className={styles.userType}>{userType}</Text>
        </div>
      </div>
    </div>
  );
};
