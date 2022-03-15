import React, { useState, useRef, useEffect } from 'react';
import { ILesson} from './helpers/types';
import { LessonProgressIndicator } from './controls/lesson-progress-indicator/lesson-progress-indicator';
import { LessonVideoPlayButton } from './controls/lesson-video-play-button/lesson-video-play-button';
import { usePersistentState } from './helpers/use-persistent-state';
import styles from './tutorial.module.scss'


export interface TutorialProps {
    lessonsData: Array<ILesson>
}

export const Tutorial: React.FC<TutorialProps> = ({
    lessonsData

}) => {  
    // lessons 
    const [curLesson, setCurLesson] = usePersistentState<number>('curlesson', 0);    
    const [lessonsCompleted, setLessonsCompleted] = usePersistentState<boolean[]>(
        'lessonsCompleted', 
        lessonsData.map(() =>{
            return false;
        })
    );    
    const Lesson = lessonsData[curLesson]?.lessonComponent;   
    
    // video     
    const videoElement = useRef<HTMLVideoElement>(null);
    const [videoShouldPlay, setVideoPlayState] = useState(false);
    const [curLessonVideo, setCurLessonVideo] = useState<ILesson>(lessonsData[curLesson]); 
    
    const playVideoModal = () => {   
        // which video lesson to play
        const nextLesson = curLesson < lessonsData.length - 1 ? curLesson + 1 : curLesson;        
        if (lessonsCompleted[nextLesson]){
            setCurLessonVideo(lessonsData[curLesson]);
        }else{
            // what is the next lesson
            setCurLessonVideo(lessonsData[curLesson !== 0 ? nextLesson : 0]);            
            setCurLesson(nextLesson);
        }    
        // show modal and play lesson video 
        setVideoPlayState (true); 
    }    

    const onVideoEnded = () => { 
        // hide modal and stop lesson video 
        setVideoPlayState (false);        
        // update  lessons progress
        let updatedLessonsCompleted = [...lessonsCompleted]; 
        updatedLessonsCompleted[curLesson] = true; 
        setLessonsCompleted(updatedLessonsCompleted);
    };
    
    useEffect(() => {   
        videoShouldPlay ? videoElement.current!.play() : videoElement.current!.pause();
    }, [videoShouldPlay, videoElement]);
    
    return (        
        <div className = {styles.wrapper}>
            <div className={styles.modal} style={{ display: videoShouldPlay ? 'flex' : 'none'}}>
                <video                   
                    controls = {true}
                    preload = {'auto'}
                    poster = {curLessonVideo.videoPoster}
                    src={curLessonVideo.videoSrc}
                    ref={videoElement}
                    onEnded={onVideoEnded}
                />
                <span/>
            </div>
            <Lesson/> 
            <div className = {styles.controls}>                
                <LessonVideoPlayButton
                    playVideoModal = {playVideoModal}
                />
                <LessonProgressIndicator 
                    setCurLesson = {setCurLesson}
                    lessonsData = {lessonsData} 
                    lessonsCompleted = {lessonsCompleted}
                    curLesson = {curLesson}                    
                />
            </div>
        </div>
    )
};