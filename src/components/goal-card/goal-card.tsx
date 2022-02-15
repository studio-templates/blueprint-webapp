import React from 'react';
import { Card } from '../card/card';
import './goal-card.scss'

export interface GoalCardProps {
    price: number;
    date: string;
    icon: JSX.Element;
    category: string;
}

export const GoalCard: React.FC<GoalCardProps> = ({ price, date, icon, category }) => (
    <Card className="rounded padded with-shadow squared">
        <div className="title">
            ${price}
        </div>
        <div className="subtitle">
            {date}
        </div>
        <div className="spacer"></div>
        {icon}
        <div className="text">
            {category}
        </div>
    </Card>
);