import React from "react";
import styles from "./goals-group.module.scss";
import { Goal } from "../goal/goal";

export interface GoalsGroupProps {
  className?: string;
}

export const GoalsGroup: React.FC<GoalsGroupProps> = ({ className }) => {
  return (
    <div className={styles.root}>
      <Goal />
      <Goal />
      <Goal />
    </div>
  );
};
