import React from 'react';
import {Elevation, H3, Card, Switch, Spinner, ProgressBar, Button, Callout } from "@blueprintjs/core";
import { CircleIconButton } from '../CircleIconButton/CircleIconButton';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { RadioButton } from '../RadioButton/RadioButton';
import styles from './product-item.module.scss';


export interface ProductItemProps {    
    className?: string;
}

export const ProductItem: React.FC<ProductItemProps> = ({     
    ...props
}) => {
    return (
        <div className={styles['product-screen']}>
            <div className={styles['image-container']}>
                <img className={styles[`product-image`]} src="https://i.ibb.co/VMfBvZJ/Screen-Shot-2022-02-09-at-15-33-04.png" />
            </div>
            <div className={styles['details-card']}>
                <div className={styles['price-row']}>
                    <span className={styles['product-name']}>Peppermint Mocha</span>
                    <span className={styles['image-product-price']}>$28.00</span>
                </div>
                <div className={styles['image-container']}>
                    <div className={styles['image-container']}>
                        <span>Big</span>
                        <RadioButton checked={true} />
                    </div>
                    <div className={styles['size-option']}>
                        <span>Medium</span>
                        <RadioButton checked={false} />
                    </div>
                    <div className={styles['size-option']}>
                        <span>Small</span>
                        <RadioButton checked={false} />
                    </div>
                </div>
                <div className={styles['description-row']}>
                    <span className={styles['description']}>
                        A holiday classic, our Peppermint Mocha infuses hand-pulled espresso with rich chocolate sauce.
                    </span>
                </div>
                <div className={styles['buttons-row']}>
                    <CircleIconButton icon='heart' />
                    <PrimaryButton text='Add to cart' />
                </div>
            </div>
        </div>
    )
};