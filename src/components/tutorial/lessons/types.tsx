import React from 'react';

export interface ILesson {
    lessonComponent: React.ComponentType;
    startTime: number;
    endTime: number;
}

export interface ILessonInfo extends ILesson {
    completed: boolean;
}