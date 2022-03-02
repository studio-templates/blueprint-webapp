import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { LessonsProgress } from '../../../src/components/tutorial/controls/lesson-progress-indicator/lesson-progress-indicator';

export default createBoard({
    name: 'Lessons Progress Bar',
    Board: () => <LessonsProgress />
});
