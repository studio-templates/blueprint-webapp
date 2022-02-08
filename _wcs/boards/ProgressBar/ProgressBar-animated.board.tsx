
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { ProgressBar } from '../../../src/components/progress-bar/progress-bar';

export default createBoard({
    name: 'ProgressBar animated',
    Board: () => <ProgressBar intent="primary" stripes={true} animate={true} />,
    environmentProps: {
        canvasWidth: 250
    }
});
