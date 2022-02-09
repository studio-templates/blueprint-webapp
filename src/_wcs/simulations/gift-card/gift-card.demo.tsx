
import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { GiftCard } from './../../../components/gift-card/gift-card';
import img1 from '../../../components/gift-card/assets/img-2.jpg';
import './gift-card.demo.scss';

export default createDemo({
    name: 'Example of a gift card panel',
    demo: () => <div className='grid-2-col'><GiftCard imgSrc={img1} /><GiftCard /></div>,
    environmentProps: {
        windowHeight: 711,
        canvasHeight: 610
    });
