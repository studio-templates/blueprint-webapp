import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { UpgradeToPremiumContainer } from '../../../components/upgrade-to-premium-container/upgrade-to-premium-container';
import { GiveYourMoneyLogo } from '../../../components/give-your-money-logo/give-your-money-logo';

export default createBoard({
    name: 'UpgradeToPremiumContainer',
    Board: () => <UpgradeToPremiumContainer></UpgradeToPremiumContainer>
});
