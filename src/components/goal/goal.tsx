import React from "react";
import styles from "./goal.module.scss";
import { ShadowCard } from "../shadow-card/shadow-card";
import { Icon } from "../icon/Icon";
import { IconName } from "@blueprintjs/icons";

export interface Goal {
  price: number;
  date: string;
  icon: IconName;
  category: string;
}

export interface GoalProps {
  goal: Goal;
  className?: string;
}

export const Goal: React.FC<GoalProps> = ({
  goal: { category, date, icon, price },
  className,
}) => {
  return (
    <div className={styles.root}>
      <ShadowCard showCard={true}>
        <div className={styles.price}>
          {price}$<div className={styles.date}>{date}</div>
        </div>
        <div className={styles.footer}>
          <Icon icon={icon}></Icon>
          <div className={styles.category}>{category}</div>
        </div>
      </ShadowCard>
    </div>
  );
};
