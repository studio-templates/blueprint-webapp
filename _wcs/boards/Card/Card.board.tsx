
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../src/components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => <Card>
        <h1>$550</h1>
        <h2>12/20/20</h2>
        <img src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/maki_mountain-15.png" />
        <p>Holidays</p>
    </Card>
});
