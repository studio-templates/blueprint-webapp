import React, { useState } from 'react';
import styles from './switch-composite.module.scss'
import { Switch } from '../switch/switch';

export interface SwitchCompositeProps {
    className?: string;
    activeCard?: boolean;
}

export const SwitchComposite: React.FC<SwitchCompositeProps> = ({ activeCard, className }) => {
    const [active, setActive] = useState(false);

    return <div className={`${styles.root} ${className}`}>
        <Switch className={styles.switch} checked={active} onChange={() => setActive(!active)}/>
        {active ? 'Card deactivated' : 'Deactivate card'}
    </div>;
};