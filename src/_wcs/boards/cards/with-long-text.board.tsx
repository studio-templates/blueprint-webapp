import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Cards } from '../../../components/cards/cards';

export default createBoard({
    name: 'with long text',
    Board: () => <Cards incomePrice={1500.55} outcomePrice={350} balancePrice={28000000} cardInfo={{
        cardHolder: 'Anat Fennig',
        company: 'Spotify',
        expiryDate: '06/23',
        premium: false
    }} />,
    environmentProps: {
        canvasHeight: 364,
        canvasWidth: 597,
        windowWidth: 926,
        canvasBackgroundColor: '#ffffff',
        windowHeight: 434
    }
});
