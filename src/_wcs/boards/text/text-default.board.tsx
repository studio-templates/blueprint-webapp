import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Text } from '../../../components/text/text';

export default createBoard({
    name: 'Text-default',
    Board: () => <Text about="jkn" defaultValue="anat" />,
    environmentProps: {
        canvasWidth: 152,
        canvasHeight: 74
    }
});
