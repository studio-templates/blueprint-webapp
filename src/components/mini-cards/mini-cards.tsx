import React from 'react';
import {Elevation, H3, Card, Switch, Spinner, ProgressBar, Button, Callout } from "@blueprintjs/core";
import logo from './assets/logo.svg';
import styles from './mini-cards.module.scss';


export interface MiniCardsProps {    
    className?: string;
}

export const MiniCards: React.FC<MiniCardsProps> = ({     
    ...props
}) => {
    return (
        <Card className={styles.wrapper}> 
            <img className={styles.logo} src={logo} />                       
            <Card className={styles.card} elevation={Elevation.THREE}>
                <Switch defaultChecked large />
                <div >
                    <H3 className={styles.title}>Enable Communication Limits</H3>            
                    <p className={'${styles.title} ${styles.sub}'}>Limits apply to Phone, FaceTime, Messages and iCloud contacts. </p>
                </div>
            </Card>
            <Card className={styles.card} elevation={Elevation.THREE}>
                <Spinner intent='primary' size={33} />
                <span/><H3 className={styles.title}>Software Update Installation...</H3>
            </Card>            
            <Card className={styles.title} elevation={Elevation.THREE}>
                <ProgressBar animate={false} intent='primary' value={0.65}/>
                <span/><Button className={styles.btn} intent='primary' icon="cross" ></Button>
            </Card>
            <Callout title='Successfully Updated' icon='automatic-updates' intent='success'>
                    <p className={'${styles.title} ${styles.sub}'}>Aliquam imperdiet lacus quam, imperdiet fermentum lectus pretium vitae. 
                    Curabitur quis porttitor lorem, sed porttitor erat. Vestibulum ante ipsum primis in faucibus orci 
                    luctus et ultrices posuere cubilia curae; Nullam et blandit nisi. Curabitur iaculis vitae tellus sed hendrerit. 
                    Vestibulum fringilla massa in quam iaculis ullamcorper.</p>
            </Callout>
        </Card>
    )
};