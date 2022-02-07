
import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { MiniCards } from './../../../components/mini-cards/mini-cards';

export default createDemo({
    name: 'MiniCards',
    demo: () => <MiniCards />,
    environmentProps: {
        canvasWidth: 600,
        windowHeight: 800
    }
});
