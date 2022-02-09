import React from 'react';

import './PrimaryButton.scss';


export interface PrimaryButtonProps {
    text: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text }) => {
    return (
        <div className="primary-btn">{text}</div>
    )
};