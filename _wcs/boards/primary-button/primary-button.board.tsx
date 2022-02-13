
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { PrimaryButton } from '../../../src/components/primary-button/primary-button';

export default createBoard({
    name: 'PrimaryButton',
    Board: () => <PrimaryButton text="kokokoko" />
});
