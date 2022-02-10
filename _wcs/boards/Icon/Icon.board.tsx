
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Icon } from '../../../src/components/icon/Icon';

export default createBoard({
    name: 'Icon',
    Board: () => <Icon icon="emoji" />
});
