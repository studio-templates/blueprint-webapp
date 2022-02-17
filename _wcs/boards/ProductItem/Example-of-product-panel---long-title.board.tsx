import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { ProductItem } from '../../../src/components/product-item/product-item';

export default createBoard({
    name: 'Example of product panel - long title',
    Board: () => <ProductItem title="Regular Mocha With Extra Foam" />,
    environmentProps: {
        windowWidth: 600,
        windowHeight: 800,
    }
});
