
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Callout } from '../../../src/components/callout/callout';

export default createBoard({
    name: 'Callout',
    Board: () => <Callout title="I Am a callout" icon="emoji" />
});
