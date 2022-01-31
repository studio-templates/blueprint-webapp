
import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { NonIdealState } from '../../../src/components/non-ideal-state/non-ideal-state';

export default createDemo({
    name: 'NonIdealState',
    demo: () => <NonIdealState
                action={<p>More text!</p>}
                description="I am a description"
                title="ERROR"
                icon="emoji"
            />,
});
