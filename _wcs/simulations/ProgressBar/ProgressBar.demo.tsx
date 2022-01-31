
import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { ProgressBar } from '../../../src/components/progress-bar/progress-bar';

export default createDemo({
    name: 'ProgressBar',
    demo: () => <ProgressBar intent="success" stripes={true} animate={false} />,
    environmentProps: {
        canvasWidth: 250
    }
});
