import React from 'react';

export interface ILesson {
    lesson: React.ComponentType;
    endTimeStamp: number;
}

export interface ILessonInfo extends ILesson {
    completed: boolean;
}