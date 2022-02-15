
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { ShadowCard } from '../../../components/shadow-card/shadow-card';

export default createBoard({
    name: 'ShadowCard',
    Board: () => <ShadowCard />,
    environmentProps: {
        canvasHeight: 192,
        canvasWidth: 177
    }
});
