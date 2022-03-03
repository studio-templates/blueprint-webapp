import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Tutorial } from './../../../src/components/tutorial/tutorial';
import { lessonsList } from '../../../src/components/tutorial/lessons/lessonsList';

export default createBoard({
    name: 'WCS Tutorial',
    Board: () => <Tutorial lessonsList={lessonsList} />,
    environmentProps: {
        windowWidth: 1000,
        windowHeight: 690,
        canvasWidth: 1000,
        canvasHeight: 690,
        canvasMargin: {
            top: 1,
            left: 1,
            bottom: 1,
            right: 1
        }
    }
});
