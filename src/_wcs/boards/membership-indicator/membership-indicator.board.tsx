
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MembershipIndicator } from './../../../components/membership-indicator/membership-indicator';

export default createBoard({
    name: 'MembershipIndicator',
    Board: () => <MembershipIndicator />
});
