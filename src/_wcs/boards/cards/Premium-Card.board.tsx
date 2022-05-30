import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Cards } from '../../../components/cards/cards';

export default createBoard({
    name: 'Premium Card',
    Board: () => <Cards incomePrice={1500.55} outcomePrice={350} balancePrice={232} cardInfo={{
        cardHolder: 'Omer Kenet ',
        company: 'Duda',
        expiryDate: '06/23',
        premium: true
    }} />,
    environmentProps: {
        canvasHeight: 364,
        canvasWidth: 649,
        windowWidth: 828,
        canvasBackgroundColor: '#ffffff',
        windowHeight: 617
    }
});
