import React from 'react';
import {Elevation, Card, Icon} from "@blueprintjs/core";
import defaultImg from './assets/peppermint.png';
import styles from './product-item.module.scss';

export interface ProductItemProps {    
    className?: string;
    imgURL?: string;
}

/**
 * This Product Item component is a simple demo component to showcase the capabilities of Wix Component Studio, 
 * it is a basic implementation, which is not meant to be utilized in a production environment.
 * 
 * Use this demo to get a feel for how easy and fun it is to create and edit components in WCS using Blueprint.js, a 3rd party React-based UI toolkit.
 * 
 */
export const ProductItem: React.FC<ProductItemProps> = ({ 
    imgURL = defaultImg,
}) => {
    return (
        <Card className={styles.product_wrapper} elevation={Elevation.FOUR}>             
            <img className={styles.product_image} src={imgURL} />            
            <Card className={styles.product_body}>                
                <Card className={styles.product_row}> 
                    <p className={styles.product_name}>Peppermint Mocha</p>
                    <p className={styles.product_price}>$28.00</p>
                </Card>
                <Card className={styles.product_row}>
                    <p className={styles.product_option}>Big</p>
                    <input type='radio' name='radio' defaultChecked/>
                </Card>
                <Card className={styles.product_row}> 
                    <p className={styles.product_option}>Medium</p>
                    <input type='radio' name='radio'/>
                </Card>
                <Card className={styles.product_row}> 
                    <p className={styles.product_option}>Small</p>
                    <input type='radio' name='radio' />
                </Card>                    
                <Card className={styles.product_row}>
                    <p className={styles.product_desc}>A holiday classic, our Peppermint Mocha infuses hand-pulled espresso with rich chocolate sauce.</p>                  
                </Card>
                <Card className={styles.product_row}>               
                    <button className={styles['btn-icon']} type='button'>
                        <Icon icon='heart' color='white' size={16} />
                    </button>
                    <button className={styles['btn-add']} type='button'>Add to cart</button>
                </Card>
            </Card>
        </Card>
    )
};