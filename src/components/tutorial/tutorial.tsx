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
        <div className = {styles.wrapper}>
            {Lesson ?  <Lesson/> : <Welcome/>}
            <div className = {styles.controls}>                
                <input type='button' value='click'/>
                <LessonsProgress 
                    lessonsInfo={lessonsInfo} 
                    curLesson={curLesson} 
                    goToLesson={setCurLesson}
                />
            </div>
        </div>
    )
};

























/*<div className = {styles.page}>   
    <div className = {styles.videoBG}>
        <video className = {styles.vContent} poster={posterURL} autoPlay muted loop preload='auto'>
            <source src = {videoURL} type="video/mp4"/>  
        </video>
    </div>
    <div className = {styles.content}>
        <div className = {styles.cols}>
            <img className = {styles.logo} src={logoURL}/> 
            <p className = {styles.title}>{title}</p> 
            <p className = {styles.subtitle}> {subTitle}</p>
        </div>
        <ProductItem/>
    </div> 
    <div className = {styles.divider}>
        <svg viewBox = '0 0 300 200' width = '100%' height = '100%' preserveAspectRatio = 'none'>
        <path d="M 0,200 C 0,200 300,200 300,0 L 300,200 z"></path>
        </svg> 
    </div>
</div>


return (
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





