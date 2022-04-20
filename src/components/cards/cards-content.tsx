import React from 'react';
import styles from "./cards.module.scss";

import { Divider } from "../divider/divider";

export interface CardsContentProps {
    leftSideRender?: React.ReactNode;
    rightSideRender?: React.ReactNode;
}

export const CardsContent: React.FC<CardsContentProps> = ({leftSideRender, rightSideRender, children}) => {
    return (
        <div className={`${styles.layout} ${styles.content}`}>
            <>
                <div className={styles["left"]}>
                    {leftSideRender}
                </div>
                <Divider color="E8E8E8" className={styles.divider}></Divider>
                <div className={styles["right"]}>
                    {rightSideRender}
                    {children}
                </div>
            </>
        </div>
    )
}