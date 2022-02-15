import React from "react";
import styles from "./shadow-card.module.scss";

export interface ShadowCardProps {
  className?: string;
  title?: string;
  showCard?: boolean;
}

export const ShadowCard: React.FC<ShadowCardProps> = ({
  className,
  title,
  showCard = true,
  children,
}) => {
  return showCard ? (
    <div className={`${styles.root} ${styles.shadow} ${styles.spacing}`}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  ) : (
    <>{children}</>
  );
};
