import React from 'react';

import './RadioButton.scss';


export interface RadioButtonProps {
    checked: boolean;
}

export const RadioButton: React.FC<RadioButtonProps> = ({ checked }) => {
    return (
        <span className={checked ? "radio-btn-checked" : 'radio-btn'}/>
    )
};