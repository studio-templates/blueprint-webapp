
import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { RadioButton } from '../../../src/components/RadioButton/RadioButton';

export default createDemo({
    name: 'RadioButton',
    demo: () => <RadioButton checked={true} />,
});
