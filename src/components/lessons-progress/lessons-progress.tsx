import React from 'react';
import { ILessonInfo } from "../tutorial/types";
import styles from './lessons-progress.module.scss'

export interface LessonsProgressProps {    
    goToLesson?(idx: number): void;
    lessonsInfo?: ILessonInfo[];    
    curLesson?: number
}

export const LessonsProgress: React.FC<LessonsProgressProps> = ({
    goToLesson = ()=>{},
    lessonsInfo = [{
        lesson: React.Component,
        endTimeStamp: 0,
        completed: false
    }],
    curLesson = -1
}) => {

    return (
        <div className={styles.wrapper}>
            {lessonsInfo.length ?
                lessonsInfo.map((lesson, idx) => (
                    <div 
                        key={idx} 
                        className={styles['step-item'] + ' ' + styles[getUIClass(curLesson, lesson)]}
                    >                        
                        <button 
                            disabled={!isClickable(curLesson, lesson)} 
                            onClick={() => goToLesson(idx)}
                        >
                            {idx + 1}
                        </button>
                    </div>
                )) : null}

        </div>
    );
};

function getUIClass(curLesson: number, lesson: ILessonInfo): string {
    return curLesson === -1 ? 'none': lesson.completed ? 'completed' : 'active';
}

function isClickable(curLesson: number, lesson: ILessonInfo, ): boolean {
    return curLesson > -1 && lesson.completed;
}








/*const num =123
const aaa = 'avi' + num
{`${styles['step-item']}${full ? ` ${styles.full}` : '' }`}
{styles['step-item']}${full ? ` ${styles.full}` : '' }`}

function getClassSufix(index: number, current: number) {
    return current===-1 ? 'none': index < current ? 'done' : index === current ? 'current' : 'next';
}

const Lesson = lessonsData[curLesson].lesson;
<div key={idx} className={styles['step-item'] + ' ' + styles['state-' + getClassSufix(i, curLesson)]}>
<button disabled={isDisabled(lesson, idx)} onClick={() => onClick(idx)} >{idx + 1}</button>
</div>
)) : null}*/