
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Transaction } from '../../../components/transaction/transaction';

export default createBoard({
    name: 'Transaction',
    Board: () => <Transaction icon="airplane" receiver="Tesco Market" typeName="Shopping" date="13 Dec 2020" amount={75.67}/>
});
