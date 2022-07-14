import React from 'react';
import {Elevation, H1, TextArea, Button, Card, InputGroup, } from "@blueprintjs/core";
import defaultLogoURL from './assets/logo.svg';
import styles from './form-card.module.scss';


export interface FormCardProps {        
    formType?: 'signin' | 'contact' | 'signup';
    logoURL?: string;
}

/**
 * This Form Card component is a simple demo component to showcase the capabilities of Wix Component Studio, 
 * it is a basic implementation, which is not meant to be utilized in a production environment.
 * 
 * Use this demo to get a feel for how easy and fun it is to create and edit components in WCS using Blueprint.js, a 3rd party React-based UI toolkit.
 * 
 */
export const FormCard: React.FC<FormCardProps> = ({     
    formType = 'signin',        
    logoURL = defaultLogoURL

}) => {    
    const submitCaption = formType === 'signin' ? 'Sign In' : formType === 'signup' ? 'Sign Up' : 'Send'
    const formTitle = formType === 'signin' ? 'Sign In' : formType === 'signup' ? 'Sign Up' : 'Contact Us'

    return (
        <Card className={`${styles.card} ${styles.wrapper}`} elevation={Elevation.FOUR}>
            <div className={`${styles.card} ${styles.header}`}>
                <img className={styles.logo} src={logoURL} />
                <H1>{formTitle}</H1>
            </div>
            <InputGroup
                type='email'
                fill
                round
                placeholder = 'Your Email' 
                id='email'       
            />

            {formType !== 'contact' ? (
                <InputGroup   
                    type='password'                
                    fill
                    round
                    placeholder = 'Password'  
                    id='pass'             
                />
            ) : (
                <TextArea/>
            )}

            <div className={`${styles.card} ${styles.submit}`}>               
                {formType !== 'contact' ? 'Forgot your Password?' : <span/>}
                <Button text={submitCaption} className={styles.btn} intent='primary' type="submit" />
            </div>
        </Card>
    )
};