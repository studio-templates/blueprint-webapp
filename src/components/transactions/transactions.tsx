import React from 'react';
import styles from './transactions.module.scss'
import { TransactionTableRow } from '../transaction-table-row/transaction-table-row';
import { Divider } from '../divider/divider';

export interface TransactionsProps {
    className?: string;
}

export const Transactions: React.FC<TransactionsProps> = ({ className }) => {
    return <div className={styles.root}>
        <div>
            <TransactionTableRow amount={75.67} date="13 Dec 2020" icon="shopping-cart" name="Tesco Market" type="Shopping"></TransactionTableRow>
            <Divider></Divider>
            <TransactionTableRow amount={250} date="14 Dec 2020" icon="tank" name="ElectroMan Market" type="Shopping"></TransactionTableRow>
            <Divider></Divider>
            <TransactionTableRow amount={19.5} date="07 Dec 2020" icon="helicopter" type="Food" name="Fiorgio Restaurant"></TransactionTableRow>
            <Divider></Divider>
            <TransactionTableRow amount={350} icon="person" date="06 Dec 2020" type="Sport" name="John Mathew Kayne"></TransactionTableRow>
            <Divider></Divider>
            <TransactionTableRow amount={430} icon="person" date="31 Nov 2020" type="Shopping" name="Ann Marlin"></TransactionTableRow>
            <Divider />
        </div></div>;
};