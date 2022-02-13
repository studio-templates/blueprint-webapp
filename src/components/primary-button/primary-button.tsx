import React from 'react';
import styles from './primary-button.module.scss';


export interface PrimaryButtonProps {    
    className?: string;
    text?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({    
    text = "Add to cart",
    ...props
}) => {
    return (
        <div className={styles['primary-btn']}>{text}</div>
    )
};