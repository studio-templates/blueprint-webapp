
import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { ProgressBar } from '../../../src/components/progress-bar/progress-bar';

export default createDemo({
    name: 'ProgressBar animated',
    demo: () => <ProgressBar intent="primary" stripes={true} animate={true} />,
    environmentProps: {
        canvasWidth: 250
    }
});
