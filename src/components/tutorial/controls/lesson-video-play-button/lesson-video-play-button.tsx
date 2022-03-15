import React from 'react';
//import styles from './lesson-next-button.module.scss'

export interface LessonVideoPlayButtonProps {    
    playVideoModal(): void;
}

export const LessonVideoPlayButton: React.FC<LessonVideoPlayButtonProps> = ({
    playVideoModal

}) => {
    return (
        <input 
            type='button' 
            value='click'
            onClick={playVideoModal}
        />
    );
};