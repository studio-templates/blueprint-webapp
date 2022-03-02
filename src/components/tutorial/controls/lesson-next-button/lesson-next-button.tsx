import React from 'react';
import { ILessonInfo } from "../../lessons/types";
//import styles from './lesson-next-button.module.scss'

export interface LessonNextButtonProps {    
    gotoNextLesson?(): void;
}

export const LessonNextButton: React.FC<LessonNextButtonProps> = ({
    gotoNextLesson = ()=>{},

}) => {
    return (
        <input 
            type='button' 
            value='click'
            onClick={() => gotoNextLesson()}
        />
    );
};

/*function getUIClass(idx: number, curLesson: number, lessonCompleted: boolean): string {      
    return  idx === curLesson ? (lessonCompleted ? 'revisited': 'active') :  (lessonCompleted ? 'completed': 'none');
}

onClick={() => {
    if(curLesson > -1) {
        let updatedLessonsInfo = [...lessonsInfo]; 
        updatedLessonsInfo[curLesson].completed = true; 
        setLessonsInfo(updatedLessonsInfo); 
    }     
    setCurLesson(curLesson < lessons.length - 1 ? curLesson + 1 : curLesson) 
}}

*/


