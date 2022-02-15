
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { GiftCard } from '../../../src/components/gift-card/gift-card';
import photo from '../../../src/components/gift-card/assets/img-2.jpg';
import styles from './GiftCard.board.module.scss';

export default createBoard({
    name: 'Example of a gift card panel',
    Board: () => <div className={styles.grid2col}><GiftCard imgSrc={photo} /><GiftCard /></div>,
    environmentProps: {
        windowHeight: 700,
        canvasHeight: 600
    }
});
