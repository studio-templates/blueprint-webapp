import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Cards } from '../../../components/cards/cards';

export default createBoard({
    name: 'Premium Card',
    Board: () => <Cards incomePrice={1500.55} outcomePrice={350} balancePrice={2800} cardInfo={{
        cardHolder: 'Nir Yuz',
        company: 'Wix',
        expiryDate: '04/22',
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
