
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Pdofilepic } from '../../../components/pdofilepic/pdofilepic';

export default createBoard({
    name: 'Pdofilepic',
    Board: () => <Pdofilepic />
});
