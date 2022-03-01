import React from "react";
import styles from "./credit-card.module.scss";
import { Card } from "../card/card";

export interface CardInfo {
  cardHolder: string;
  expiryDate: string;
  company: string;
  premium?: boolean;
}

export interface CreditCardProps {
  cardInfo: CardInfo;
  className?: string;
}

export const CreditCard: React.FC<CreditCardProps> = ({
  cardInfo: { cardHolder, expiryDate, company, premium },
  className,
}) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <Card className={styles.card} elevation={2}>
        <div className={styles.circles}>
          <div className={`${styles.circle} ${styles.circleFirst}`}></div>
          <div className={`${styles.circle} ${styles.circleSecond}`}></div>
          <div className={`${styles.circle} ${styles.circleThird}`}></div>
        </div>
        <div className={styles.heading}>
          <h4 className={styles.companyTitle}>{company}</h4>
          <h5 className={styles.premium} hidden={!premium}>
            Premium Account
          </h5>
        </div>
        <div className={styles.cardNumberContainer}>
          <div className={styles.cardNumber}>5789</div>
          <div className={styles.cardNumber}>****</div>
          <div className={styles.cardNumber}>****</div>
          <div className={styles.cardNumber}>2847</div>
        </div>
        <div className={styles.footerItem}>
          <h6 className={styles.footerItemTitle}>Card Holder</h6>
          {cardHolder}
        </div>
        <div className={styles.footerItem}>
          <h6 className={styles.footerItemTitle}>Expiry Date</h6>
          {expiryDate}
        </div>
      </Card>
    </div>
  );
};
