import React, { useState, useRef, useEffect } from 'react';
import { ILesson, ILessonInfo } from './lessons/types';
import { LessonProgressIndicator } from './controls/lesson-progress-indicator/lesson-progress-indicator';
import { LessonNextButton } from './controls/lesson-next-button/lesson-next-button';
import videoPoster from './assets/poster.jpg';
import styles from './tutorial.module.scss'


export interface TutorialProps {
    lessonsList: Array<ILesson>
}

export const Tutorial: React.FC<TutorialProps> = ({
    lessonsList

}) => {     
     // lessons
     const [lessonsData, setLessonsData] = useState<ILessonInfo[]>(
        lessonsList.map((lesson)=>(
            {
                ...lesson, 
                completed: false
            }
        )
    ));
    const [curLesson, setCurLesson] = useState(0); 
    const Lesson = lessonsData[curLesson]?.lessonComponent;

    // tutorial
    const gotoNextLesson = () => {        
        //let updatedInfo = [...lessonsInfo]; 
        //updatedInfo[curLesson].completed = true; 
        //setLessonsInfo(updatedInfo);            
        //setCurLesson(curLesson < lessons.length - 1 ? curLesson + 1 : curLesson) 
        //setCurLesson(curLesson < lessonsList.length - 1 ? curLesson + 1 : curLesson) 
        playVideo (true)
    } 

    const gotoLesson = (idx: number) => {        
        setCurLesson(idx) 
    }

     // video
     const videoSrc = 'https://video.wixstatic.com/video/7e1c61_5268b1a0437545c1bfd4922fbf4c7e97/720p/mp4/file.mp4';
     const videoElement = useRef<HTMLVideoElement>(null);
     const [videoPlaying, playVideo] = useState(false);

    const videoOnTimeUpdate = () => {        
        if (videoPlaying && videoElement.current!.currentTime! >= lessonsData[curLesson].endTime - 0.016){
            playVideo (false);
            let updatedInfo = [...lessonsData]; 
            updatedInfo[curLesson].completed = true; 
            setLessonsData(updatedInfo);            
            setCurLesson(curLesson < lessonsList.length - 1 ? curLesson + 1 : curLesson);
        };
    };
    
    useEffect(() => {  
        videoElement.current!.currentTime = lessonsData[curLesson].startTime;       
        videoPlaying
        ? videoElement.current!.play()
        : videoElement.current!.pause();
    }, [videoPlaying, videoElement]);
    
    return (        
        <div className = {styles.wrapper}>
            <div className={styles.modal} style={{ display: videoPlaying ? 'flex' : 'none'}}>
                <video className={styles.foo1}                   
                    preload = {'auto'}
                    poster = {videoPoster}
                    src={videoSrc}
                    ref={videoElement}
                    onTimeUpdate={videoOnTimeUpdate}
                />
                <span className={styles.foo2}/>
            </div>
            <Lesson/> 
            <div className = {styles.controls}>                
                <LessonNextButton
                    gotoNextLesson={gotoNextLesson}
                />
                <LessonProgressIndicator 
                    lessonsInfo={lessonsData} 
                    curLesson={curLesson} 
                    gotoLesson={gotoLesson}
                />
            </div>
        </div>
    )
};


/*const videoPause = () => {
        setVideoPlayerState({
            ...videoPlayerState,
            isPlaying: false,
        });
    };

    const videoPlay = () => {
        /*setVideoPlayerState({
            ...videoPlayerState,
            isPlaying: true,
        });
    };
    const videoGotoTime = () => {
        const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
        setPlayerState({
            ...playerState,
            progress,
        });
    };*/
