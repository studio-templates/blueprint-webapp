
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { IconContainer } from '../../../components/icon-container/icon-container';
import { Icon } from '../../../components/icon/Icon';

export default createBoard({
    name: 'IconContainer',
    Board: () => <IconContainer className="iconContainer"></IconContainer>,
    environmentProps: {
        canvasWidth: 25,
        canvasHeight: 25
    }
});
