import React from 'react';
import styles from './image-avatar.module.scss'

export interface ImageAvatarProps {
    className?: string;
}

export const ImageAvatar: React.FC<ImageAvatarProps> = ({ className }) => {
    return <div className={styles.root}><img src="https://avatars.githubusercontent.com/u/8433494?s=40&v=4" className={styles.img} />Lior</div>;
};