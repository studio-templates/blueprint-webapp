import React from "react";
import styles from "./transaction.module.scss";
import { Callout } from "../callout/callout";
import { Icon } from "../icon/Icon";
import { IconName } from "@blueprintjs/icons";
import TransactionHistory_module_scss from '../transaction-history/transaction-history.module.scss';

export interface TransactionProps {
    className?: string;
    icon: string;
    receiver: string;
    typeName: string;
    date: string;
    amount: number;
}

export const Transaction: React.FC<TransactionProps> = ({
    className,
    icon,
    receiver,
    typeName,
    date,
    amount,
}) => {
    return (
        <div className={`${styles.root} ${styles.row}`}>
            <tr className={styles.tr}>
                <td className={`${styles.receiverColumn}`}>
                    <Icon icon={icon as IconName} className={TransactionHistory_module_scss.Icon} />
                    <span>{receiver}</span>
                </td>
                <td className={styles.typeColumn}>
                    <span>{typeName}</span>
                </td>
                <td className={styles.dateColumn}>
                    <span>{date}</span>
                </td>
                <td className={styles.amountColumn}>
                    $<span>{amount}</span>
                </td>
            </tr>
        </div>
    );
};
