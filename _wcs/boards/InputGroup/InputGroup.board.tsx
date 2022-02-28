
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { InputGroup } from '../../../src/components/input-group/input-group';

export default createBoard({
    name: 'InputGroup',
    Board: () => <InputGroup />
});
