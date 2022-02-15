import React from "react";
import styles from "./transaction-history.module.scss";
import { Callout } from "../callout/callout";
import { Transaction } from "../transaction/transaction";
import { Title } from '../title/title';
import { Card } from '../card/card';

export interface TransactionHistoryProps {
    className?: string;
}

export const TransactionHistory: React.FC<TransactionHistoryProps> = ({
    className,
}) => {
    return (
        <div className={styles.root}>
            <Card elevation={2}>
                <h1 className={styles.transactionHistoryHeader}>
                    Transaction history
                </h1><br />
                <Title className={styles.tableTitle} /><table>
                    <Transaction
                        icon="airplane"
                        receiver="Tesco Market"
                        typeName="Shopping"
                        date="13 Dec 2020"
                        amount={75.67}
                    />
                    <Transaction
                        icon="airplane"
                        receiver="ElectroMen Market"
                        typeName="Shopping"
                        date="14 Dec 2020"
                        amount={250}
                    />
                    <Transaction
                        icon="airplane"
                        receiver="Fiorgio Restaurant"
                        typeName="Food"
                        date="07 Dec 2020"
                        amount={19.5}
                    />
                    <Transaction
                        icon="airplane"
                        receiver="John Mathew Kayne"
                        typeName="Sport"
                        date="06 Dec 2020"
                        amount={350}
                    />
                    <Transaction
                        icon="airplane"
                        receiver="Ann Marlin"
                        typeName="Shopping"
                        date="31 Nov 2020"
                        amount={430}
                    />
                </table></Card></div>
    );
};
