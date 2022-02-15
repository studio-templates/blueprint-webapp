
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { AwesomeViktorsCard } from '../../../components/awesome-viktors-card/awesome-viktors-card';
import { Icon } from '../../../components/icon/Icon';

export default createBoard({
    name: 'AwesomeViktorsCard',
    Board: () => (
        <AwesomeViktorsCard
            price={550}
            date='12/12/2022'
            icon={<Icon icon="mountain" iconSize={32} color="#7CB4F9" />}
            category='Holidays'
        />),
    environmentProps: {
        canvasWidth: 240,
        canvasHeight: 144
    }
});
