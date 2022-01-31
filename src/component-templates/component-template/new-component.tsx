import React from 'react';
import './new-component.scss';

export interface NewComponentProps {
    className?: string;
}

export const NewComponent: React.FC<NewComponentProps> = ({ className }) => {
    return <div>NewComponent</div>;
};
