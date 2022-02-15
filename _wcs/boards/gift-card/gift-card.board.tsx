
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { GiftCard } from '../../../src/components/gift-card/gift-card';
import img1 from '../../../src/components/gift-card/assets/img-2.jpg';
import styles from './gift-card.board.module.scss';

export default createBoard({
    name: 'Example of a gift card panel',
    Board: () => <div className={styles['grid-2-col']}><GiftCard imgSrc={img1} /><GiftCard /></div>,
    environmentProps: {
        windowHeight: 711,
        canvasHeight: 610
    }});
