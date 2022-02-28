import React from 'react';
import styles from './credit-card.module.scss'
import { Card } from '../card/card';

export interface CreditCardProps {
    className?: string;
    cardHolder: string;
    expiryDate: string;
    company: string;
    premium?: boolean;
}

export const CreditCard: React.FC<CreditCardProps> = ({ className, cardHolder, expiryDate, company, premium }) => {
    return <div className={styles.root}>
        <Card className={styles.card} elevation={2}>
            <div className={`${styles.circle} ${styles.circleFirst}`}></div>
            <div className={`${styles.circle} ${styles.circleSecond}`}></div>
            <div className={`${styles.circle} ${styles.circleThird}`}></div>
            <h4 className={styles.companyTitle}>{company}</h4>
            <h5 className={styles.premium} hidden={!premium}>Premium Account</h5>
            <div className={styles.cardNumberContainer}>
                <div className={styles.cardNumber}>5789</div>
                <div className={styles.cardNumber}>****</div>
                <div className={styles.cardNumber}>****</div>
                <div className={styles.cardNumber}>2847</div>
            </div>
            <div className={styles.cardHolder}>
                <h6 className={styles.cardHolderTitle}>Card Holder</h6>{cardHolder}</div>
            <div className={styles.expiryDate}>
                <h6 className={styles.expiryDateTitle}>Expiry Date</h6>{expiryDate}</div></Card>
    </div>;
};