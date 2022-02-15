
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Goals } from '../../../components/goals/goals';

export default createBoard({
    name: 'Goals',
    Board: () => <Goals goals={[{
        category: 'Holidays ',
        date: '12/20/20',
        icon: 'mountain',
        price: '$550'
    }, {
        category: 'Renovation',
        date: '12/20/22',
        icon: 'add',
        price: '$200'
    }, {
        category: 'Xbox',
        date: '12/20/22',
        icon: 'offline',
        price: '$820'
    }]} />
});
