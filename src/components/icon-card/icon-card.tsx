import React from "react";
import styles from "./icon-card.module.scss";
import { Card } from "../card/card";
import { Icon } from "../icon/Icon";
import { MaybeElement } from "@blueprintjs/core";
import { IconName } from "@blueprintjs/icons";

export interface IconCardProps {
    className?: string;
    icon: IconName | MaybeElement;
    color: string;
    backgroundColor: string;
}

export const IconCard: React.FC<IconCardProps> = ({
    icon,
    color,
    backgroundColor,
}) => {
    return (
        <div className={styles.root}>
            <Card className={styles.IconCard} style={{ color, backgroundColor }}>
                <Icon icon={icon} className={styles.IconSize} />
            </Card>
        </div>
    );
};
