import React from 'react';
import {Elevation, Button, Card, InputGroup, H1} from "@blueprintjs/core";
import defaultLogo from './assets/logo.svg';
import styles from './sign-in.module.scss';


export interface SignInProps {    
    logoSrc?: string;  
    title?: string;
    emailInputPlaceholder?: string;
    passwordInputPlaceholder?: string;
    forgotLabel?: string;
    submitButtonCaption?: string;
}

export const SignIn: React.FC<SignInProps> = ({     
    logoSrc = defaultLogo,
    title = 'Sign In',
    emailInputPlaceholder = 'Email',
    passwordInputPlaceholder = 'Password',
    forgotLabel = 'Forgot your password?',
    submitButtonCaption = 'Sign In',
    ...props
}) => {

    return (
        <Card className={`${styles.card} ${styles.wrapper}`} elevation={Elevation.FOUR}>
            <div className={`${styles.card} ${styles.header}`}>
                <img className={styles.logo} src={logoSrc} />
                <H1>{title}</H1>
            </div>
            <InputGroup
                type='email'
                fill
                round
                placeholder = {emailInputPlaceholder} 
                id='email'       
            />
            <InputGroup
                type='password'                
                fill
                round
                placeholder = {passwordInputPlaceholder}  
                id='pass'             
            />
            <div className={`${styles.card} ${styles.submit}`}>
            {forgotLabel}
                <Button text={submitButtonCaption} className={styles.btn} intent='primary' type="submit" />
            </div>
        </Card>
    )
};


