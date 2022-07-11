import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Cards } from '../../../components/cards/cards';

export default createBoard({
    name: 'Standard Card',
    Board: () => <Cards incomePrice={1500} outcomePrice={350} balancePrice={2800} cardInfo={{
        cardHolder: 'Omer Kenet',
        company: 'Wix',
        expiryDate: '06/25',
    }} />,
    environmentProps: {
        canvasHeight: 364,
        canvasWidth: 597,
        windowWidth: 1086,
        canvasBackgroundColor: '#ffffff',
    }
});
