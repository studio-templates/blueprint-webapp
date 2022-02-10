import React from 'react';
import styles from './new-component.module.scss'

export interface NewComponentProps {
    className?: string;
}

export const NewComponent: React.FC<NewComponentProps> = ({ className }) => {
    return <div className={styles.root}>NewComponent</div>;
};