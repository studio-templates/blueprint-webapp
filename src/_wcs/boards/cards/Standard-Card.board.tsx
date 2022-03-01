import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Cards } from '../../../components/cards/cards';

export default createBoard({
    name: 'Standard Card',
    Board: () => <Cards incomePrice={1500.55} outcomePrice={350.65} balancePrice={2850.75} cardInfo={{
        cardHolder: 'John Marthon',
        company: 'Wix',
        expiryDate: '06/25',
    }} />,
    environmentProps: {
        canvasHeight: 364,
        canvasWidth: 597,
        windowWidth: 926,
        canvasBackgroundColor: '#ffffff',
    }
});
