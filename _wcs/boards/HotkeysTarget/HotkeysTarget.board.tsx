
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { HotkeysTarget } from '../../../src/components/hotkeys-target/hotkeys-target';

export default createBoard({
    name: 'HotkeysTarget',
    Board: () => <HotkeysTarget hotkeys=""/>
});
