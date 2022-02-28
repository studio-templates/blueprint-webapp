import React, { useState } from 'react';
import { LessonsProgress } from '../lessons-progress/lessons-progress';
import { Welcome } from './lessons/welcome/welcome';
import { ILesson, ILessonInfo } from './types';
import styles from './tutorial.module.scss'


export interface TutorialProps {
    lessons: Array<ILesson>
}

export const Tutorial: React.FC<TutorialProps> = ({
    lessons

}) => { 

    const [curLesson, setCurLesson] = useState(-1) 
    const [lessonsInfo, setLessonsInfo] = useState<ILessonInfo[]>(
        lessons.map((data)=>(
            {
                ...data, 
                completed: false
            }
        )
    )); 
    
    
    const Lesson = lessonsInfo[curLesson]?.lesson;
    return (
        <div>
            {Lesson ?  <Lesson/> : <Welcome/>}
            <LessonsProgress lessonsInfo={lessonsInfo} curLesson={curLesson} goToLesson={setCurLesson}/>
        </div>
    )
};


/*return (
    <div className={styles.wrapper}>
        {curLesson == -1 ? <Welcom/> : <Lesson/>}
        <LessonsProgress current={state} onClick={onClic}/>
    </div>
)*/




//const newAry: Array<ILessonStatus>= lessonContent.map((data)=>({...data, isCompleted: false}));

/*return (
    <div className={styles.wrapper}>
        <Component lesson={lessons[current]} />
        <LessonsProgress current={current} onClick={(index) => {
            setState({
                ...state,
                current: index
            })
        }} />
    </div>
)*/

/*export interface TutorialProps {
    className?: string;
    tutorial: ITutorial
}*/
/*interface Lesson {
    component: React.ComponentType<{lesson: Lesson;}>;
};*/
 //const {curLesson, lessons } = state;

    //const {curLesson, lessons } = state;


    
    
    
   
    
   //const Component = lessons[current]?.component ?? (() => <>Not found</>);
   
   //const Component = lessonContent[state.curLesson].lesson





