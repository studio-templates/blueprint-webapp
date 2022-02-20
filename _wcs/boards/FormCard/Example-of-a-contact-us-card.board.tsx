import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { FormCard } from '../../../src/components/form-card/form-card';

export default createBoard({
    name: 'Example of a sign-in card',
    Board: () => <FormCard />,
    environmentProps: {
        windowHeight: 600,
        windowWidth: 800,
    }
});
