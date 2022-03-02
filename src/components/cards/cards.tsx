import React from "react";
import styles from "./cards.module.scss";
import { Statistics } from "../statistics/statistics";
import { SwitchComposite } from "../switch-composite/switch-composite";
import { Card } from "../card/card";
import { Divider } from "../divider/divider";
import { CreditCard, CardInfo } from "../credit-card/credit-card";

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
                    </div>
                    <Divider color="E8E8E8" className={styles.divider} />
                    <div className={styles["right"]}>
                        <Statistics price={balancePrice} type="balance" />
                        <Statistics price={incomePrice} type="income" />
                        <Statistics price={outcomePrice} type="outcome" /></div>
                    <div className={styles.footer}>
                        <SwitchComposite />
                    </div>
                </div>
            </Card></div>
    );
};
