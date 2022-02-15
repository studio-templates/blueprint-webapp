import React from 'react';
import { Card } from '../card/card';
import { Icon } from '../icon/Icon';

export interface NewComponentAlphaProps {
    className?: string;
}

export const NewComponentAlpha: React.FC<NewComponentAlphaProps> = ({ className = '' }) => (
    <div className={className}>
        <Card className="Card">
            <div className="text">
                <h2 className="h2">$200</h2>
                <h4 className="graytext">12/20/20</h4>
            </div>
            <div className="div2">
                <Icon icon="mountain" className="iconcolor" iconSize={30}></Icon>
                <h5 className="h5">Holidays</h5>
            </div></Card></div>
);