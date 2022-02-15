
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { SumupMenu } from '../../../components/sumup-menu/sumup-menu';

export default createBoard({
    name: 'SumupMenu',
    Board: () => <SumupMenu />
});
