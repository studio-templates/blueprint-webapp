import { ILesson} from '../types';
import { Lesson01 } from './01/lesson01';
import { Lesson02 } from './02/lesson02';
import { Lesson03 } from './03/lesson03';
import { Lesson04 } from './04/lesson04';
import { Lesson05 } from './05/lesson05';

export const lessons: ILesson[] = [
    {
        lesson: Lesson01,
        endTimeStamp: 4.2
    },

    {
        lesson: Lesson02,
        endTimeStamp: 8.3
    },

    {
        lesson: Lesson03,
        endTimeStamp: 11.0
    },

    {
        lesson: Lesson04,
        endTimeStamp: 15.4
    },

    {
        lesson: Lesson05,
        endTimeStamp: 18.5
    },

];
