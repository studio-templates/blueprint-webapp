import React from 'react';
import { CircleIconButton } from '../circle-icon-button/circle-icon-button';
import { PrimaryButton } from '../primary-button/primary-button';
import { RadioButton } from '../radio-button/radio-button';
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
                <img className={styles['product-image']} src="https://i.ibb.co/VMfBvZJ/Screen-Shot-2022-02-09-at-15-33-04.png" />
            </div>
            <div className={styles['details-card']}>
                <div className={styles['price-row']}>
                    <span className={styles['product-name']}>Peppermint Mocha</span>
                    <span className={styles['product-price']}>$28.00</span>
                </div>
                <div className={styles['size-row']}>
                    <div className={styles['size-option']}>
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