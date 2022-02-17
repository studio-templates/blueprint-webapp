import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { SignIn } from '../../../src/components/sign-in/sign-in';

export default createBoard({
    name: 'Contact Us Form',
    Board: () => <SignIn title="Contact Us" submitButtonCaption="Send" emailInputPlaceholder="Your Email" passwordInputPlaceholder="Message" />,
    environmentProps: {
        windowHeight: 600,
        windowWidth: 800,
    }
});
