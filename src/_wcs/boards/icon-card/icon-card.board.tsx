
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { IconCard } from '../../../components/icon-card/icon-card';

export default createBoard({
    name: 'IconCard',
    Board: () => <IconCard />
});
