
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import App from '../../../src/App';

export default createBoard({
    name: 'App',
    Board: () => <App title={<><div>mmm</div>, <div>asdasd</div></>} />,
    environmentProps: {
        windowWidth: 1030,
        windowHeight: 739,
        canvasWidth: 1180
    }
});
