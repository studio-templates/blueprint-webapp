
import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { ProductCard } from '../../../src/components/ProductCard/ProductCard';

export default createDemo({
    name: 'ProductCard',
    demo: () => <ProductCard price={16} />,
    environmentProps: {
        windowWidth: 411,
        windowHeight: 823,
    }
});
