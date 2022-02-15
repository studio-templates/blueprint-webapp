import React from 'react';
import './styles.css';

export interface GoalCardProps {
    className?: string;
    date: string;
    price: number;
    goal: string;
    img: string;
}

export const GoalCard: React.FC<GoalCardProps> = ({ className = '', price, date, img, goal }) => (
    <div className={`${className} root root root root root`}>
        <h1> {price} </h1>
        <h2> {date} </h2>
        <img src={img} />
        <p> {goal} </p>
    </div>

);