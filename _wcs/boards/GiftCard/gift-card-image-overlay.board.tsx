import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { GiftCard } from '../../../src/components/gift-card/gift-card';
import photoURL from '../../../src/components/gift-card/assets/img-2.jpg';
import styles from './gift-card.board.module.scss';

export default createBoard({
    name: 'Gift Card',
    Board: () => <div className={styles.grid2col}>
        <GiftCard photoURL={photoURL}/>
        <GiftCard photoURL={photoURL} full  />
    </div>,
    environmentProps: {
        windowHeight: 700,
        canvasHeight: 600
    }
});