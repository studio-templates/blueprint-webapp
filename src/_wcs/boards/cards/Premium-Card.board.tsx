import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Cards } from '../../../components/cards/cards';

export default createBoard({
    name: 'Premium Card',
    Board: () => <Cards incomePrice={1500.55} outcomePrice={350} balancePrice={120} cardInfo={{
        cardHolder: 'Omer Kenet',
        company: 'Wix',
        expiryDate: '06/23',
        premium: true
    }} />,
    environmentProps: {
        canvasHeight: 364,
        canvasWidth: 597,
        windowWidth: 992,
        canvasBackgroundColor: '#ffffff',
        windowHeight: 815
    }
});
