import React from "react";
import styles from "./statistics.module.scss";

export interface StatisticsProps {
  className?: string;
  price?: number;
  type?: "balance" | "income" | "outcome";
}

export const Statistics: React.FC<StatisticsProps> = ({
  type = "balance",
  price,
}) => {
  const rootClassName = styles[type];
  const labels = {
    balance: "Balance",
    income: "Income",
    outcome: "Outcome",
  };
  return (
    <div className={`${styles.root} ${rootClassName}`}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.dollar}>$</div>
          {price}
        </div>
        <div className={styles.description}>{labels[type]}</div>
      </div>
    </div>
  );
};
