import React from 'react';
import {Elevation, RadioGroup, Radio,Button, Card, Icon, H1} from "@blueprintjs/core";
import defaultImg from './assets/peppermint.png';
import styles from './product-item.module.scss';

export interface ProductItemProps {    
    className?: string;
    imgURL?: string;
}

export const ProductItem: React.FC<ProductItemProps> = ({ 
    imgURL = defaultImg,  
    ...props
}) => {
    return (
        <Card className={`${styles.card} ${styles.wrapper}`} elevation={Elevation.FOUR}>             
            <img src={imgURL} />            
            <Card className={`${styles.card} ${styles.body}`}>                
                <Card className={`${styles.card} ${styles.row}`}> 
                    <p className={styles.product_name}>Peppermint Mocha</p>
                    <p className={styles.product_price}>$28.00</p>
                </Card>                
                
                    <Radio value="0" />
                    <Radio value="1" />
                    <Radio value="2" />
               
                <Card className={`${styles.card} ${styles.row}`}>
                    <p className={styles.product_desc}>A holiday classic, our Peppermint Mocha infuses hand-pulled espresso with rich chocolate sauce.</p>                  
                </Card>
                <Card className={`${styles.card} ${styles.row}`}>               
                    <button className={styles['btn-icon']} type='button'>
                        <Icon icon="heart" color='white' size={16} />
                    </button>
                    <button className={styles['btn-add']} type='button'>Add to cart</button>
                </Card>
            </Card>
        </Card>
    )
};

/*<RadioGroup onChange={function(){}} selectedValue="0">
                    <Radio value="0" />
                    <Radio value="1" />
                    <Radio value="2" />
                </RadioGroup>*/


/*
<Card className={`${styles.card} ${styles.wrapper}`} elevation={Elevation.FOUR}>
             <button className={styles.btn5}>Add to cart</button>
            <img src={imgURL} />            
            <Card className={`${styles.card} ${styles.body}`}>
                
                <Card className={`${styles.card} ${styles.row}`}> 
                    <p className={styles.product_name}>Peppermint Mocha</p>
                    <p className={styles.product_price}>$28.00</p>
                </Card>
                
                <RadioGroup
                        label="Meal Choice"
                        onChange={function(){}}
                        selectedValue="one"
                    >
                        <Radio label="Soup" value="one" />
                        <Radio label="Salad" value="two" />
                        <Radio label="Sandwich" value="three" />
                </RadioGroup>

                <Card className={`${styles.card} ${styles.row}`}>
                    <p className={styles.product_desc}>A holiday classic, our Peppermint Mocha infuses hand-pulled espresso with rich chocolate sauce.</p>                  
                </Card>

                <Card className={`${styles.card} ${styles.row}`}>               
                    <button className={`${styles.btn} ${styles.icon}`}>
                        <Icon icon="heart" color='white' size={16} />
                    </button>
                    <button className={styles.btn5}>Add to cart</button>
                </Card>
            </Card>
        </Card>*/

//<button><Icon icon="heart" color='white' size={30} /></button>
//<Button color='white' className={styles.btn} intent='primary' icon="heart"></Button>

/*
Card className={styles['product-screen']}>
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
        </Card>*/