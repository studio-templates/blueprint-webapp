
import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { SignIn } from './../../../components/sign-in/sign-in';

export default createDemo({
    name: 'SignIn',
    demo: () => <SignIn></SignIn>,
    environmentProps: {
        windowHeight: 573,
        windowBackgroundColor: '#ffffff',
        windowWidth: 1024
    }
});
