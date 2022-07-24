import React from "react";
import { Card } from "../card/card";
import styles from "./credit-card.module.scss";

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
      <Card className={premium ? styles.cardPremium : styles.card} elevation={2}>
        <div className={styles.circles}>
          <div className={`${(premium ? styles.circlePremium : styles.circle)} ${styles.circleFirst}`}/>
          <div className={`${(premium ? styles.circlePremium : styles.circle)} ${styles.circleSecond}`}/>
          <div className={`${(premium ? styles.circlePremium : styles.circle)} ${styles.circleThird}`}/>
        </div>
        <div className={styles.heading}>
          <h4 className={styles.companyTitle}>{company}</h4>
          <h5 className={styles.premium} hidden={!premium}>Premium Account</h5>
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
          <h6 className={styles.footerItemTitle}>Valid Thru</h6>
          {expiryDate}
        </div>
      </Card>
    </div>
  );
};
