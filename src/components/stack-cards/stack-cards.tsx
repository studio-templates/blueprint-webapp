import React from 'react';
import { Card } from '../card/card';
import { GoalCard } from '../goal-card/goal-card';
import './styles.css';

export interface StackCardsProps {
    className?: string;
}

export const StackCards: React.FC<StackCardsProps> = ({ className = '' }) => (
    <div className={className}>
        <span>Goals<img src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/Group 129Button.png" />
        </span>
        <div className="root">
            <GoalCard goal="Holidays" img="https://wixmp-b7f7090100b13623109851bc.wixmp.com/maki_mountain-15.png" date="12/20/20" price={550}></GoalCard>
            <GoalCard goal="Renovation" date="12/20/20" img={'https://wixmp-b7f7090100b13623109851bc.wixmp.com/reno.png'} price={200} />
            <GoalCard date={'12/20/20'} goal="Xbox" img="https://wixmp-b7f7090100b13623109851bc.wixmp.com/xbox.png" price={820} />
        </div></div>
);