import React from "react";
import styles from "./cards.module.scss";
import { Statistics, StatisticsProps } from "../statistics/statistics";
import { SwitchComposite } from "../switch-composite/switch-composite";
import { Card } from "../card/card";
import { CreditCard, CardInfo } from "../credit-card/credit-card";
import { CardsContent } from './cards-content'

const createStatisticsData = (prices: Array<number | undefined>): Array<StatisticsProps>  => {
    const types: Array<'balance' | 'income' | 'outcome'> = ['balance',  'income', 'outcome']
    return types.map((t,i) => ({price: prices[i], type: t})) 
}

export const StatisticsComp: React.FC<{data: Array<StatisticsProps>}> = ({data}) => {
    return <div className={styles["statistics"]}>{data.map((stat, i) => <Statistics key={'stat'+i} price={stat.price} type={stat.type} className={stat.className}/>)}</div>
}


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
    const statisticsData = createStatisticsData([balancePrice, incomePrice, outcomePrice])
    return (
        <div className={styles.root}>
            <Card className={styles.outline}>
                <p className={styles.title}>Cards</p>
                <div className={`${styles.layout} ${styles.content}`}>
                    <CardsContent 
                        leftSideRender={<CreditCard cardInfo={cardInfo}/>} 
                        rightSideRender={<><StatisticsComp data={statisticsData}/><SwitchComposite /></>}>
                    </CardsContent>
                </div>
            </Card>
        </div>
    );
};
