import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { FormCard } from '../../../src/components/form-card/form-card';
import logo from '../../../src/components/form-card/assets/logo.png';

export default createBoard({
    name: 'Example of a contact-us card',
    Board: () => <FormCard formType='contact' logoURL={logo} />,
    environmentProps: {
        windowHeight: 600,
        windowWidth: 800,
    }
});
