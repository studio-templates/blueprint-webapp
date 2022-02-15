
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { TagInput } from '../../../src/components/tag-input/tag-input';

export default createBoard({
    name: 'TagInput',
    Board: () => <TagInput />
});
