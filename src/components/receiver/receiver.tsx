import React from 'react';
import { IconContainer } from '../icon-container/icon-container';

export interface ReceiverProps {
    className?: string;
    icon: string;
    name: string;
}

export const Receiver: React.FC<ReceiverProps> = ({ icon, name, className = '' }) => (
    <div className={`${className} receiver`}>
        <IconContainer icon={icon} className="iconContainerReceiver" />{name}</div>
);