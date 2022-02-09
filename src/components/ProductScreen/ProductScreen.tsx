import React from 'react';

import { CircleIconButton } from '../CircleIconButton/CircleIconButton';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { RadioButton } from '../RadioButton/RadioButton';

import './ProductScreen.scss';


export const ProductScreen: React.FC = () => {
    return (
        <div className="product-screen">

            <div className="image-container">
                <img className="product-image" src="https://i.ibb.co/VMfBvZJ/Screen-Shot-2022-02-09-at-15-33-04.png" />
            </div>

            <div className="details-card">

                <div className="price-row">
                    <span className="product-name">Peppermint Mocha</span>
                    <span className="product-price">$28.00</span>
                </div>

                <div className="size-row">
                    <div className="size-option">
                        <span>Big</span>
                        <RadioButton checked={true} />
                    </div>
                    <div className="size-option">
                        <span>Medium</span>
                        <RadioButton checked={false} />
                    </div>
                    <div className="size-option">
                        <span>Small</span>
                        <RadioButton checked={false} />
                    </div>
                </div>

                <div className="description-row">
                    <span className="description">
                        A holiday classic, our Peppermint Mocha infuses hand-pulled espresso with rich chocolate sauce.
                    </span>
                </div>

                <div className="buttons-row">
                    <CircleIconButton icon="heart" />
                    <PrimaryButton text="Add to cart" />
                </div>
            </div>
        </div>
    )
};