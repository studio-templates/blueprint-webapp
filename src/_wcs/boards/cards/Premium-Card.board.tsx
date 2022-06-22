import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Cards } from '../../../components/cards/cards';

export default createBoard({
    name: 'Premium Card',
    Board: () => <Cards incomePrice={1500} outcomePrice={350} balancePrice={20} cardInfo={{
        cardHolder: 'Omer Kenet ',
        company: 'WIx',
        expiryDate: '06/23',
        premium: true
    }} />,
    environmentProps: {
        windowWidth: 843,
        canvasBackgroundColor: '#ffffff',
        windowHeight: 768
    }
});
