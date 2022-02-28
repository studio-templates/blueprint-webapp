
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { TextArea } from '../../../src/components/text-area/text-area';

export default createBoard({
    name: 'TextArea',
    Board: () => <TextArea />
});
