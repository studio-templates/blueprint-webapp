
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { UserActionMenu } from '../../../components/user-action-menu/user-action-menu';

export default createBoard({
    name: 'UserActionMenu',
    Board: () => <UserActionMenu userName={'Noam Hoffman'} role={'Software Engineer'}/>
});
