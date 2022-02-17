import React from 'react';
import {Elevation, H3, Card, Switch, Spinner, ProgressBar, Button, Callout } from "@blueprintjs/core";
import logo from './assets/logo.svg';
import styles from './mini-cards.module.scss';


export interface MiniCardsProps {    
    className?: string;
    content?: string;
    spinnerIntent?: "primary" | "none" | "success" | "warning" | "danger";
    progressBarIntent?: "primary" | "none" | "success" | "warning" | "danger";
    calloutIntet?: "primary" | "none" | "success" | "warning" | "danger";
    switchDisabledState?: boolean;
}

export const MiniCards: React.FC<MiniCardsProps> = ({     
    content = 'Description',
    spinnerIntent = 'primary',
    progressBarIntent = 'primary',
    calloutIntet = 'success',
    switchDisabledState = false,
    ...props
}) => {
    return (
        <Card className={styles.wrapper}> 
            <img className={styles.logo} src={logo} />                       
            <Card className={styles.card} elevation={Elevation.THREE}>
                <Switch disabled={switchDisabledState} defaultChecked large />
                <div >
                    <H3 className={styles.title}>Enable Communication Limits</H3>            
                    <p className={`${styles.title} ${styles.sub}`}>Limits apply to Phone, FaceTime, Messages and iCloud contacts. </p>
                </div>
            </Card>
            <Card className={styles.card} elevation={Elevation.THREE}>
                <Spinner intent={spinnerIntent} size={33} />
                <span/><H3 className={styles.title}>Software Update Installation...</H3>
            </Card>            
            <Card className={styles.card} elevation={Elevation.THREE}>
                <ProgressBar animate={false} intent={progressBarIntent} value={0.65}/>
                <span/><Button className={styles.btn} intent='primary' icon="cross"/>
            </Card>
            <Callout title='Successfully Updated' icon='automatic-updates' intent={calloutIntet}>
                    <p className={`${styles.title} ${styles.sub}`}>{content}</p>
            </Callout>
        </Card>
    )
};