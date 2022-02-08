
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Slider } from '../../../src/components/slider/slider';

export default createBoard({
    name: 'Slider',
    Board: () => <Slider intent="primary" initialValue={4} value={4} />
});
