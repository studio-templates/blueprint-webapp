
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { ImageAvatar } from '../../../components/image-avatar/image-avatar';

export default createBoard({
    name: 'ImageAvatar',
    Board: () => <ImageAvatar />
});
