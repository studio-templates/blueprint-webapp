import React from 'react';
import styles from './new-component-2.module.scss'
import { ProgressBar } from '../progress-bar/progress-bar';

export interface NewComponent2Props {
    className?: string;
}

export const NewComponent2: React.FC<NewComponent2Props> = ({ className }) => {
    return <div className={styles.root}>
        <ProgressBar animate={false} stripes={false} intent="primary" value={0.3} />
        <div className={styles.title}>
            NewComponent2</div></div>;
};