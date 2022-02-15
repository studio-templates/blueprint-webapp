
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Switch } from '../../../src/components/switch/switch';

export default createBoard({
    name: 'Switch',
    Board: () => <Switch />
});
