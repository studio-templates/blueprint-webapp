import React from 'react';
import style from './new-component.module.scss'

export interface NewComponentProps {
    className?: string;
}

export const NewComponent: React.FC<NewComponentProps> = ({ className }) => {
    return <div className={style.root}>NewComponent</div>;
};