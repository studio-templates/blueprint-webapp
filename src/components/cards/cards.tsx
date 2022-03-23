import React from "react";
import styles from "./cards.module.scss";
import { Statistics } from "../statistics/statistics";
import { SwitchComposite } from "../switch-composite/switch-composite";
import { Card } from "../card/card";
import { Divider } from "../divider/divider";
import { CreditCard, CardInfo } from "../credit-card/credit-card";
import { WeeklyPayment1 } from '../weekly-payment-1/weekly-payment-1';


export interface CardsProps {
    className?: string;
    balancePrice?: number;
    incomePrice?: number;
    outcomePrice?: number;
    cardInfo: CardInfo;
}

export const Cards: React.FC<CardsProps> = ({
    outcomePrice,
    incomePrice,
    balancePrice,
    cardInfo,
}) => {
    return (
        <div className={styles.root}>
            <Card className={styles.outline}>
                <p className={styles.title}>Cards</p>
                <div className={`${styles.layout} ${styles.content}`}>
                    <div className={styles["left"]}>
                        <CreditCard
                            cardInfo={cardInfo}
                        />
                        <WeeklyPayment1 />
                    </div>
                    <Divider color="E8E8E8" className={styles.divider}></Divider>
                    <div className={styles["right"]}>
                        <Statistics price={balancePrice} type="balance" />
                        <Statistics price={incomePrice} type="income" />
                        <Statistics price={outcomePrice} type="outcome" />
                        <SwitchComposite />
                    </div>
                </div>
            </Card>
        </div>
    );
};
