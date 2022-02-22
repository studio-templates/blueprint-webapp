import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { LandingPage } from '../../../src/components/landing-page/landing-page';

const bgContent =  'https://video.wixstatic.com/video/11062b_2bd2aa6ddc2d47b182a186e7de7e60ac/1080p/mp4/file.mp4'
const bgPoster = 'https://static.wixstatic.com/media/11062b_2bd2aa6ddc2d47b182a186e7de7e60acf000.jpg'

export default createBoard({
    name: 'Landing Page with alternate background',
    Board: () => <LandingPage posterURL ={bgPoster} videoURL = {bgContent}/>,
    environmentProps: {
        windowWidth: 1280,
        windowHeight: 1080,
        canvasMargin: {
            top: 1,
            left: 1,
            bottom: 1,
            right: 1
        }
    },
});
