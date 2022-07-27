import React from 'react';
import styles from './new-component.module.scss'

export interface NewComponentProps {
    className?: string;
}

export const NewComponent: React.FC<NewComponentProps> = ({ className }) => {
    return <div className={styles.root}>
        <img src="https://wixplosives.github.io/wcs-assets-storage/add-panel/image-placeholder.jpg" />NewComponent</div>;
};