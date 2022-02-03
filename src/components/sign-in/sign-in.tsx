import React from 'react';
import {Elevation, Button, Card, InputGroup, H1} from "@blueprintjs/core";
import defaultLogo from './logo.svg';
import './sign-in.scss';


export interface ISignIn {    
    logo?: string;  
    title?: string;
    emailInputPlaceholder?: string;
    passwordInputPlaceholder?: string;
    forgotLabel?: string;
    submitButtonCaption?: string;
}

export const SignIn: React.FC<ISignIn> = ({     
    logo = defaultLogo,
    title = 'Sign In',
    emailInputPlaceholder = 'Email',
    passwordInputPlaceholder = 'Password',
    forgotLabel = 'Forgot your password?',
    submitButtonCaption = 'Sign In'
}) => {

    return (
        <Card className='Card' elevation={Elevation.FOUR}>
            <div className='Header'>
                <img className='Logo' src={logo} />
                <H1 className='Title'>{title}</H1>
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
            <div className='SubmitArea'>
            {forgotLabel}
                <Button text={submitButtonCaption} className='Button' intent='primary' type="submit" />
            </div>
        </Card>
    )
};


