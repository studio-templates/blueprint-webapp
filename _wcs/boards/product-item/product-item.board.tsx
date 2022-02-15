
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { ProductItem } from '../../../src/components/product-item/product-item';

export default createBoard({
    name: 'Example of product panel',
    Board: () => <ProductItem />,
    environmentProps: {
        windowWidth: 659,
        windowHeight: 879,
        canvasWidth: 379
    }
});
