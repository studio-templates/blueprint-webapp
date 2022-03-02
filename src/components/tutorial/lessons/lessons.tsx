import { ILesson} from './types';
import { Welcome } from './00/welcome';
import { Lesson01 } from './01/lesson01';
import { Lesson02 } from './02/lesson02';
import { Lesson03 } from './03/lesson03';
import { Lesson04 } from './04/lesson04';
import { Lesson05 } from './05/lesson05';

export const lessons: ILesson[] = [
    {
        lessonComponent: Welcome,
        startTime: 0.0,
        endTime: 3.0
    },
    {
        lessonComponent: Lesson01,
        startTime: 3.0,
        endTime: 9.0
    },

    {
        lessonComponent: Lesson02,
        startTime: 9.0,
        endTime: 15.0
    },

    {
        lessonComponent: Lesson03,
        startTime: 15.0,
        endTime: 21.0
    },

    {
        lessonComponent: Lesson04,
        startTime: 21.0,
        endTime: 27.0
    },

    {
        lessonComponent: Lesson05,
        startTime: 27.0,
        endTime: 33.0
    },

];
