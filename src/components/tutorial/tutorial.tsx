import React, { useState } from 'react';
import { ILesson, ILessonInfo } from './lessons/types';
import { LessonProgressIndicator } from './controls/lesson-progress-indicator/lesson-progress-indicator';
import { LessonNextButton } from './controls/lesson-next-button/lesson-next-button';
import videoPoster from './assets/poster.jpg';
import styles from './tutorial.module.scss'


export interface TutorialProps {
    lessons: Array<ILesson>
}

export const Tutorial: React.FC<TutorialProps> = ({
    lessons

}) => { 

    const [curLesson, setCurLesson] = useState(0) 
    const [lessonsInfo, setLessonsInfo] = useState<ILessonInfo[]>(
        lessons.map((lesson)=>(
            {
                ...lesson, 
                completed: false
            }
        )
    ));

    const Lesson = lessonsInfo[curLesson]?.lessonComponent;
    const gotoNextLesson = () => {        
                let updatedLessonsInfo = [...lessonsInfo]; 
                updatedLessonsInfo[curLesson].completed = true; 
                setLessonsInfo(updatedLessonsInfo);            
                setCurLesson(curLesson < lessons.length - 1 ? curLesson + 1 : curLesson) 
            }
    
    return (        
        <div className = {styles.wrapper}>
            {Lesson ?  <Lesson/> : ''}
            <div className = {styles.controls}>                
                <LessonNextButton
                    gotoNextLesson={gotoNextLesson}
                />
                <LessonProgressIndicator 
                    lessonsInfo={lessonsInfo} 
                    curLesson={curLesson} 
                    gotoLesson={setCurLesson}
                />
            </div>
        </div>
    )
};