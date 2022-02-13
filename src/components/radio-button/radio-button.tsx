import React from 'react';
import styles from './radio-button.module.scss';


export interface RadioButtonProps {
    className?: string;
    checked?: boolean
}

export const RadioButton: React.FC<RadioButtonProps> = ({     
    checked = false,
    ...props
}) => {
    return (
        <span className={checked ? styles['radio-btn-checked'] : styles['radio-btn']}/>
    )
};