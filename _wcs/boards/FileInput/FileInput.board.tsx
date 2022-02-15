
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { FileInput } from '../../../src/components/file-input/file-input';

export default createBoard({
    name: 'FileInput',
    Board: () => <FileInput />
});
