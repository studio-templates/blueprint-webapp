
import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { LandindPage } from '../../../src/components/LandingPage/LandingPage';

export default createDemo({
    name: 'LandindPage',
    demo: () => <LandindPage />,
    environmentProps: {
        windowWidth: 1756,
        windowHeight: 1080,
    }
});
