
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../src/components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => <Card className="base">
        <div className="header header">
            <h1 className="title">$550</h1>
            <h2 className="subtitle">12/20/20</h2>
        </div>
        <div className="footer">
            <img src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/maki_mountain-15.png" />
            <p className="category">Holidays</p></div></Card>,
    environmentProps: {
        canvasWidth: 191
    }
});
