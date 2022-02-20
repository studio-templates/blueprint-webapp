import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { FormCard } from '../../../src/components/form-card/form-card';

export default createBoard({
    name: 'Sign-in',
    Board: () => <FormCard/>,
    environmentProps: {
        windowHeight: 600,
        windowWidth: 800,
    }
});
