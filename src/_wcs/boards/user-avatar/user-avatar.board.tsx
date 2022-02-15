
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { UserAvatar } from '../../../components/user-avatar/user-avatar';

export default createBoard({
    name: 'UserAvatar',
    Board: () => <UserAvatar >
    </UserAvatar>
});
