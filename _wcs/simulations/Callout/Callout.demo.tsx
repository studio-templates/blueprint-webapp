
import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { Callout } from '../../../src/components/callout/callout';

export default createDemo({
    name: 'Callout',
    demo: () => <Callout title="I Am a callout" icon="emoji" />
});
