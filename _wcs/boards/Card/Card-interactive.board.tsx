
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../src/components/card/card';

export default createBoard({
    name: 'Card - interactive',
    Board: () => <Card>"I am a Card"</Card>
});
