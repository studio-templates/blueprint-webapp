import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { SignIn } from '../../../src/components/sign-in/sign-in';

export default createBoard({
    name: 'Example of a sign-in panel',
    Board: () => <SignIn></SignIn>,
    environmentProps: {
        windowHeight: 600,
        windowWidth: 800,
    }
});
