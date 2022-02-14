
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { LandingPage } from '../../../src/components/landing-page/landing-page';

export default createBoard({
    name: 'LandindPage',
    Board: () => <LandingPage />,
    environmentProps: {
        windowWidth: 1756,
        windowHeight: 1080,
        canvasMargin: {
            top: 1,
            left: 1,
            bottom: 1,
            right: 1
        }
    },
});