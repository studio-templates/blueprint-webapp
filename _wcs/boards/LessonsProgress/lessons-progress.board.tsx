import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { LessonsProgress } from './../../../src/components/lessons-progress/lessons-progress';

export default createBoard({
    name: 'Lessons Progress Bar',
    Board: () => <LessonsProgress />
});
