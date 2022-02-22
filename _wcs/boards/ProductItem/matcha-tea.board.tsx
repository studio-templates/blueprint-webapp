import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { ProductItem } from '../../../src/components/product-item/product-item';
import itemPhoto from '../../../src/components/product-item/assets/matcha-tea.png';

export default createBoard({
    name: 'Matcha Tea ',
    Board: () => <ProductItem itemName='Matche Tea' itemPhotoURL={itemPhoto} itemPrice={9.99} itemDescription='240 calories, 32g sugar, 7g fat.' />,
    environmentProps: {
        windowWidth: 600,
        windowHeight: 800,
    }
});
