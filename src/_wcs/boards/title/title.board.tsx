
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Title } from '../../../components/title/title';

export default createBoard({
    name: 'Title',
    Board: () => <Title />
});
