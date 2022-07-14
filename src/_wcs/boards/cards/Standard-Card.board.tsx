import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Cards } from '../../../components/cards/cards';

export default createBoard({
    name: 'Standard Card',
    Board: () => <Cards incomePrice={1500} outcomePrice={350} balancePrice={2800} cardInfo={{
        cardHolder: 'Jeff Lebowski',
        company: 'Wix.com',
        expiryDate: '04/20',
    }} />,
    environmentProps: {
        canvasHeight: 360,
        canvasWidth: 600,
        windowWidth: 1420,
        canvasBackgroundColor: '#ffffff',
    }
});
