
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { CreditCard } from '../../../components/credit-card/credit-card';

export default createBoard({
    name: 'CreditCard - standard',
    Board: () => <CreditCard company="cloudcash" cardHolder="Mike Smith" expiryDate="06/21" />
});
