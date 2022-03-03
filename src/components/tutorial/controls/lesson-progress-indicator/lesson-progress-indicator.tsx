import React from 'react';
import { ILessonInfo } from "../../lessons/types";
import styles from './lesson-progress-indicator.module.scss'

export interface LessonProgressIndicatorProps {    
    gotoLesson?(idx: number): void;
    lessonsInfo?: ILessonInfo[];    
    curLesson?: number
}

export const LessonProgressIndicator: React.FC<LessonProgressIndicatorProps> = ({
    gotoLesson = ()=>{},
    lessonsInfo = [],
    curLesson = 0

}) => {  

    const getClassName = (idx: number, curLesson: number, lessonCompleted: boolean) => {      
        return  idx === curLesson  
            ? (lessonCompleted ? 'revisited': 'active')   
            : (lessonCompleted ? 'completed': 'none');
    }          
    
    return (
        <div className={styles.wrapper}>
            {lessonsInfo.length ?
                lessonsInfo.map((lesson, idx) => (
                    idx !== 0 ? 
                        <div 
                            key={idx} 
                            className={styles['step-item'] + ' ' + styles[getClassName(idx, curLesson, lesson.completed)]}
                        >                        
                            <button className={styles.btn}
                                disabled={!( lesson.completed && (idx !== curLesson))} 
                                onClick={() => gotoLesson(idx)}
                            >{idx}</button>
                        </div> : null
                )) : null
            }
        </div>
    );
};