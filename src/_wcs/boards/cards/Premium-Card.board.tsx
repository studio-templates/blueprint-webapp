import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Cards } from '../../../components/cards/cards';

export default createBoard({
    name: 'Premium Card',
    Board: () => <Cards incomePrice={1500.55} outcomePrice={250} balancePrice={20} cardInfo={{
        cardHolder: 'Tal Gadot',
        company: 'Wix',
        expiryDate: '06/23',
        premium: true
    }} />,
    environmentProps: {
        canvasHeight: 364,
        canvasWidth: 597,
        windowWidth: 926,
        canvasBackgroundColor: '#ffffff',
        windowHeight: 434
    }
});
