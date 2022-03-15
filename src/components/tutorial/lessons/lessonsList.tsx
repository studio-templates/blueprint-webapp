import React from 'react';
import { ILesson} from '../helpers/types';
import { Welcome } from './00/welcome';
import { Lesson01 } from './01/lesson01';
import { Lesson02 } from './02/lesson02';
import { Lesson03 } from './03/lesson03';
import { Lesson04 } from './04/lesson04';
import { Lesson05 } from './05/lesson05';

export const lessonsList: ILesson[] = [
    {
        lessonComponent: Welcome,
        videoSrc: 'https://video.wixstatic.com/video/68d3a9_8e0fab6c6ec044b1abffee32bc407656/720p/mp4/file.mp4',
        videoPoster: 'https://static.wixstatic.com/media/68d3a9_8e0fab6c6ec044b1abffee32bc407656f000.jpg'
    },
    {
        lessonComponent: Lesson01,
        videoSrc: 'https://video.wixstatic.com/video/68d3a9_8c97569545e442afa33ea02d0a48edb7/720p/mp4/file.mp4',
        videoPoster: 'https://static.wixstatic.com/media/68d3a9_8c97569545e442afa33ea02d0a48edb7f000.jpg'
    },

    {
        lessonComponent: Lesson02,
        videoSrc: 'https://video.wixstatic.com/video/68d3a9_9614af8476174974bccd3bce9992b97c/720p/mp4/file.mp4',
        videoPoster: 'https://static.wixstatic.com/media/68d3a9_9614af8476174974bccd3bce9992b97cf000.jpg'
    },

    {
        lessonComponent: Lesson03,
        videoSrc: 'https://video.wixstatic.com/video/68d3a9_a7e5fa40eda84d60a55e80a986e6d14f/720p/mp4/file.mp4',
        videoPoster: 'https://static.wixstatic.com/media/68d3a9_a7e5fa40eda84d60a55e80a986e6d14ff000.jpg'
    },

    {
        lessonComponent: Lesson04,
        videoSrc: 'https://video.wixstatic.com/video/68d3a9_0049fa306f4445a88622769a5a975ac3/720p/mp4/file.mp4',
        videoPoster: 'https://static.wixstatic.com/media/68d3a9_0049fa306f4445a88622769a5a975ac3f000.jpg'
    },

    {
        lessonComponent: Lesson05,
        videoSrc: 'https://video.wixstatic.com/video/68d3a9_164fe77f041e4a2e9207ffc3ae8aaf86/720p/mp4/file.mp4',
        videoPoster: 'https://static.wixstatic.com/media/68d3a9_164fe77f041e4a2e9207ffc3ae8aaf86f000.jpg'
    },

];

/*const ary = {
    FOO: Lesson05

}

export const getty = (s: keyof typeof ary): React.ComponentType => {
    return ary[s];
}*/

