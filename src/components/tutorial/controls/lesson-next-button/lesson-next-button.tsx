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