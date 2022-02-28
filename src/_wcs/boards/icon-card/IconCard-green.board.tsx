
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { IconCard } from '../../../components/icon-card/icon-card';

export default createBoard({
    name: 'IconCard-green',
    Board: () => <IconCard icon="truck" color={'#22A447'} backgroundColor={'#DDF9E4'} />,
    environmentProps: {
        windowWidth: 1024
    }
});
