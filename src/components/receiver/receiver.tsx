import React from 'react';
import { IconContainer } from '../icon-container/icon-container';

export interface ReceiverProps {
    className?: string;
}

export const Receiver: React.FC<ReceiverProps> = ({ className = '' }) => (
    <div className={`${className} receiver`}>
        <IconContainer icon={'shopping-cart'} className="iconContainerReceiver" />Receiver</div>
);