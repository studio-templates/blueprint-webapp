
import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { SignIn } from './../../../components/sign-in/sign-in';

export default createDemo({
    name: 'Example of a sign-in panel',
    demo: () => <SignIn></SignIn>,
    environmentProps: {
        windowHeight: 634,
        windowBackgroundColor: '#ffffff',
        windowWidth: 1024
    }
});
