
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../src/components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => <Card elevation={2}>"I am a Card"</Card>
});
