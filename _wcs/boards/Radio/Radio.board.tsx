
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Radio } from '../../../src/components/radio/radio';

export default createBoard({
    name: 'Radio',
    Board: () => <Radio />
});
