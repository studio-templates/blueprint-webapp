import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { GiftCard } from '../../../src/components/gift-card/gift-card';
import styles from './gift-card.board.module.scss';

export default createBoard({
    name: 'Example of a gift card panel',
    Board: () => <div className={styles.grid2col}>
                    <GiftCard/>
                    <GiftCard full/>
                </div>,
    environmentProps: {
        windowHeight: 700,
        canvasHeight: 600
    }
});