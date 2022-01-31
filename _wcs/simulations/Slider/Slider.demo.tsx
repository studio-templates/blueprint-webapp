
import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { Slider } from '../../../src/components/slider/slider';

export default createDemo({
    name: 'Slider',
    demo: () => <Slider intent="primary" initialValue={4} value={4} />
});
