
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { PanelStack } from '../../../src/components/panel-stack/panel-stack';

export default createBoard({
    name: 'PanelStack',
    Board: () => <PanelStack />
});
