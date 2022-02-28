import React from 'react';
import styles from './cards.module.scss'
import { Statistics } from '../statistics/statistics';
import { SwitchComposite } from '../switch-composite/switch-composite';
import { Card } from '../card/card';
import { Divider } from '../divider/divider';
import { CreditCard } from '../credit-card/credit-card';

export interface CardsProps {
    className?: string;
}

export const Cards: React.FC<CardsProps> = ({ className }) => {
    return <div className={styles.root}>
        <Card
            children={
                <>
                    <div className={styles['left-side']}>
                        <CreditCard cardHolder="Mike Smith" company="cloudcash" expiryDate="06/21" premium />
                    </div>
                    <Divider color="E8E8E8" className={styles.divider} />
                    <div className={styles['right-side']}>
                        <Statistics price={2850.75} text="Current Balance" />
                        <Statistics price={1500.55} text="Income" />
                        <Statistics price={350.65} text="Outcome" />
                        <SwitchComposite />
                    </div>
                </>
            }
            className={styles.layout} />
    </div>;
};