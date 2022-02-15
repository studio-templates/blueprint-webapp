
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { GiveYourMoneyLogo } from '../../../components/give-your-money-logo/give-your-money-logo';

export default createBoard({
    name: 'GiveYourMoneyLogo',
    Board: () => <GiveYourMoneyLogo />
});
