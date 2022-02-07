import React from 'react';
import {Elevation, H3, Card, Switch, Spinner, ProgressBar, Button, Callout } from "@blueprintjs/core";
import logo from './assets/logo.svg';
import './mini-cards.scss';


export interface MiniCardsProps {    
    className?: string;
}

export const MiniCards: React.FC<MiniCardsProps> = ({     
    ...props
}) => {
    return (
        <Card className='wrapper' > 
            <img className='logo' src={logo} />                       
            <Card className='card' elevation={Elevation.THREE}>
                <Switch defaultChecked large />
                <div >
                    <H3 className='title'>Enable Communication Limits</H3>            
                    <p className='title sub'>Limits apply to Phone, FaceTime, Messages and iCloud contacts. </p>
                </div>
            </Card>
            <Card className='card' elevation={Elevation.THREE}>
                <Spinner intent='primary' size='33' />
                <span/><H3 className='title'>Software Update Installation...</H3>
            </Card>            
            <Card className='card' elevation={Elevation.THREE}>
                <ProgressBar animate='false' intent='primary' value='0.65'/>
                <span/><Button className='btn' intent='primary' icon="cross" ></Button>
            </Card>
            <Callout title='Successfully Updated' icon='automatic-updates' intent='success'>
                    <p className='title sub'>Aliquam imperdiet lacus quam, imperdiet fermentum lectus pretium vitae. 
                    Curabitur quis porttitor lorem, sed porttitor erat. Vestibulum ante ipsum primis in faucibus orci 
                    luctus et ultrices posuere cubilia curae; Nullam et blandit nisi. Curabitur iaculis vitae tellus sed hendrerit. 
                    Vestibulum fringilla massa in quam iaculis ullamcorper.</p>
            </Callout>
        </Card>
    )
};