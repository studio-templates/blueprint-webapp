import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Spinner } from '../../../components/spinner/spinner';

export default createBoard({
    name: 'Spinner',
    Board: () => <Spinner />
});
