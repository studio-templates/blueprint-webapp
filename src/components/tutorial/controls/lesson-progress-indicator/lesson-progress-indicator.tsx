import React from 'react';
import { ILesson } from "../../helpers/types";
import styles from './lesson-progress-indicator.module.scss'

export interface LessonProgressIndicatorProps {    
    setCurLesson(idx: number): void;
    lessonsData: ILesson[];    
    lessonsCompleted: boolean[];
    curLesson: number
}

export const LessonProgressIndicator: React.FC<LessonProgressIndicatorProps> = ({
    setCurLesson,
    lessonsData,
    lessonsCompleted,
    curLesson

}) => {  

    const getClassName = (idx: number, curLesson: number, lessonCompleted: boolean) => {      
        return  idx === curLesson  
            ? (lessonCompleted ? 'revisited': 'active')   
            : (lessonCompleted ? 'completed': 'none');
    }          
    
    return (
        <div className={styles.wrapper}>
            {lessonsData.length ?
                lessonsData.map((lesson, idx) => (
                    idx !== 0 ? 
                        <div 
                            key={idx} 
                            className={styles['step-item'] + ' ' + styles[getClassName(idx, curLesson, lessonsCompleted[idx])]}
                        >                        
                            <button className={styles.btn}
                                disabled={!( lessonsCompleted[idx] && (idx !== curLesson))} 
                                onClick={() => setCurLesson(idx)}
                            >{idx}</button>
                        </div> : null
                )) : null
            }
        </div>
    );
};