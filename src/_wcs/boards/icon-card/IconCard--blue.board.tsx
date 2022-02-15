
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { IconCard } from '../../../components/icon-card/icon-card';

export default createBoard({
    name: 'IconCard -blue',
    Board: () => <IconCard icon="airplane" color={'#70A6E8'} backgroundColor={'#E4F0FF'} />
});
