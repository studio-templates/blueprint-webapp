import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { ProductItem } from '../../../src/components/product-item/product-item';

export default createBoard({
    name: 'Example of product panel - liked',
    Board: () => <ProductItem iconColor="tomato" title="Regular Mocha" />,
    environmentProps: {
        windowWidth: 600,
        windowHeight: 800,
    }
});
