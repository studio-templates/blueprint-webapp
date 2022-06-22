import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Cards } from '../../../components/cards/cards';

export default createBoard({
    name: 'Mobile',
    Board: () => <Cards incomePrice={1500} outcomePrice={350} balancePrice={20} cardInfo={{
        cardHolder: 'Omer Kenet ',
        company: 'Tikal',
        expiryDate: '06/23',
        premium: true
    }} />,
    environmentProps: {
        windowWidth: 414,
        canvasBackgroundColor: '#ffffff',
        windowHeight: 896
    }
});
