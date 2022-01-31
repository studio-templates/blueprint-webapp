
import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { Card } from '../../../src/components/card/card';

export default createDemo({
    name: 'Card - interactive',
    demo: () => <Card>"I am a Card"</Card>
});
