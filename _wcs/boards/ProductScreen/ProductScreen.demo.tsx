
import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { ProductScreen } from '../../../src/components/ProductScreen/ProductScreen';

export default createDemo({
    name: 'ProductScreen',
    demo: () => <ProductScreen />,
    environmentProps: {
        windowWidth: 659,
        windowHeight: 879,
        canvasWidth: 379
    }
});
