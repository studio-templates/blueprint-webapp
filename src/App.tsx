import React from 'react';
import { LandingPage } from './components/landing-page/landing-page';
import './App.css';

function App(props: {title: React.ReactNode}) {
    return (
        <div className='App'>
            <LandingPage title={props.title} />
        </div>
    );
}
export default App;
