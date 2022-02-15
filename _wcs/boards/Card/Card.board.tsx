
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../src/components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => <Card className="shadow spacing">
        <h3>Heading 3</h3>
    </Card>,
    environmentProps: {
        canvasHeight: 194,
        canvasWidth: 271,
        canvasBackgroundColor: '#ffffff'
    }
});
