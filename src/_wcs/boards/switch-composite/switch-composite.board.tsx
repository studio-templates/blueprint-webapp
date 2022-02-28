import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { SwitchComposite } from '../../../components/switch-composite/switch-composite';

export default createBoard({
    name: 'SwitchComposite',
    Board: () => <SwitchComposite />
});
