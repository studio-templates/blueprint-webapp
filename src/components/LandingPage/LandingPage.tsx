import React from 'react';

import { ProductScreen } from '../ProductScreen/ProductScreen';

import './LandingPage.scss';


export const LandindPage: React.FC = () => {
    return (
        <div className='screen'>
            
            <div className="left">
                <div className="logo">
                    <img className="logo-image" src="https://i.ibb.co/rt9BTyB/Screen-Shot-2022-02-09-at-17-22-11.png" />
                    <span>Itai's Coffee</span>
                </div>
                <div className="title">
                    Coffee shop in the heart of Tel-Aviv.
                </div>
                <div className="subtitle">
                    Itai’s Coffe was created for those who appriciate delicious and high-quality coffe.
                </div>
            </div>

            <div className="right">
                <span className="product-screen">
                    <ProductScreen />
                </span>
            </div>

            <div className="stripe"/>
        </div>
    )
};