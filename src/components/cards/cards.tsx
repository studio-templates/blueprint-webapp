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
                    <p className={styles.title}>Cards</p>
                    <div className={styles.layout}>
                        <div className={styles['left-side']}>
                            <CreditCard cardHolder="Mike Smith" company="cloudcash" expiryDate="06/21" premium />
                        </div>
                        <Divider color="E8E8E8" className={styles.divider} />
                        <div className={styles['right-side']}>
                            <div className={styles.statistics}>
                                <Statistics price={2850.75} text="Current Balance" />
                                <Statistics price={1500.55} text="Income" />
                                <Statistics price={350.65} text="Outcome" />
                            </div>
                            <SwitchComposite />
                        </div>
                    </div>
                </>
            }
            className={styles.outline} />
    </div>;
};