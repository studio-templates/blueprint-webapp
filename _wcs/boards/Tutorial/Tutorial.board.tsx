import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Tutorial } from './../../../src/components/tutorial/tutorial';
import { lessonsList } from '../../../src/components/tutorial/lessons/lessonsList';

export default createBoard({
    name: 'WCS Tutorial',
    Board: () => <Tutorial lessonsData={lessonsList} />,
    environmentProps: {
        windowWidth: 1000,
        windowHeight: 692,
        canvasWidth: 1000,
        canvasHeight: 690,
        canvasMargin: {
            right: 0,
            left: 0,
            bottom: 0,
        }
    }
});
