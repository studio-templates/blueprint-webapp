
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { ProgressBar } from '../../../src/components/progress-bar/progress-bar';

export default createBoard({
    name: 'ProgressBar',
    Board: () => <ProgressBar intent="success" stripes={true} animate={false} value={0.2} />,
    environmentProps: {
        canvasWidth: 250
    }
});
