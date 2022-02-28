
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { CreditCard } from '../../../components/credit-card/credit-card';

export default createBoard({
    name: 'CreditCard',
    Board: () => <CreditCard company="cloudcash" premium cardHolder="Mike Smith" expiryDate="06/21" />
});
