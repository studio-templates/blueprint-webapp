import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Cards } from '../../../src/components/cards/cards';

export default createBoard({
    name: 'With no values',
    Board: () => <Cards cardInfo={{
        cardHolder: 'Anat Fennig',
        company: 'Wix',
        expiryDate: '',
        premium: true
    }} />
});
