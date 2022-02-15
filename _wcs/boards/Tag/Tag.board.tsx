
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Tag } from '../../../src/components/tags/tag';

export default createBoard({
    name: 'Tag',
    Board: () => <Tag />
});
