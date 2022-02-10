
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { NumericInput } from '../../../src/components/numeric-input/numeric-input';

export default createBoard({
    name: 'NumericInput',
    Board: () => <NumericInput />
});
