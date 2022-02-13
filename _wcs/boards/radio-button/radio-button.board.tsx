
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { RadioButton } from '../../../src/components/radio-button/radio-button';

export default createBoard({
    name: 'RadioButton',
    Board: () => <RadioButton checked={true} />,
});
