
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Nivi } from '../../../components/nivi/nivi';

export default createBoard({
    name: 'Nivi',
    Board: () => <Nivi />
});
