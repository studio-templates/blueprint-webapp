import React from 'react';
import styles from './switch-composite.module.scss'
import { Switch } from '../switch/switch';

export interface SwitchCompositeProps {
    className?: string;
}

export const SwitchComposite: React.FC<SwitchCompositeProps> = ({ className }) => {
    return <div className={styles.root}>
        <Switch className={styles.switch} />Deactivate card</div>;
};