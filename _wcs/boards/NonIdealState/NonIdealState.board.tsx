
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { NonIdealState } from '../../../src/components/non-ideal-state/non-ideal-state';

export default createBoard({
    name: 'NonIdealState',
    Board: () => <NonIdealState
                action={<p>More text!</p>}
                description="I am a description"
                title="ERROR"
                icon="emoji"
            />,
});
