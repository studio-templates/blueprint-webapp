import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Lesson01 } from '../../../src/components/tutorial/lessons/01/lesson01';

export default createBoard({
    name: 'Lesson One',
    Board: () => <Lesson01></Lesson01>
});
