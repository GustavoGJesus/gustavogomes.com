import React from 'react'; 
import Typing from 'react-typing-animation'

import Styles from '../styles/home.scss'

export default function Profile(){
    return(
        <div className="profile">
            <div className="photo-profile"/>
            <h1>Gustavo Gomes</h1>
            <Typing>
                <h2>Frontend Engineer</h2>
                <Typing.Delay ms={1000} />
            </Typing>
            <div className="about">
                <p>
                Hey, I'am Software Engineer with specialty in JavaScript / NodeJs / React
                </p>
            </div>
        </div>
    );
}

