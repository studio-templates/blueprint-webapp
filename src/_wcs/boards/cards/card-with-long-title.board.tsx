import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Cards } from '../../../components/cards/cards';

export default createBoard({
    name: 'Card with long title',
    Board: () => <Cards incomePrice={1500} outcomePrice={350} balancePrice={20} cardInfo={{
        cardHolder: 'A very very very very very very long title',
        company: 'Spotify',
        expiryDate: '06/23',
        premium: true
    }} />,
    environmentProps: {
        windowWidth: 815,
        canvasBackgroundColor: '#ffffff',
        windowHeight: 599
    }
});
