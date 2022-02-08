
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Text } from '../../../src/components/text/text';

export default createBoard({
    name: 'Text',
    Board: () => <Text>I Am a text</Text>
});
