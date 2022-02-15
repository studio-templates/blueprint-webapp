import React from 'react';
import { CircleIconButton } from '../CircleIconButton/CircleIconButton';

import './ProductCard.scss';


export interface ProductCardProps {
    price: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ price }) => {
    return (
        <div className="card">

            <div className="image-container">
                <img className="product-image" src="https://i.ibb.co/VMfBvZJ/Screen-Shot-2022-02-09-at-15-33-04.png" />
            </div>

            <span className="title">Product title</span>

            <div className="bottom-row">
                <span className="price">$ 4.99</span>
                <CircleIconButton size='small' icon="plus" />
            </div>

        </div>
    )
};