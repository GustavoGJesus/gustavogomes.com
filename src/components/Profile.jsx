import React from 'react'; 
import Typing from 'react-typing-animation'

import Styles from '../styles/profile.scss'
import Cards from '../components/Cards/Cards'


import Contact from './Contact';
import Footer from './Footer';

export default function Profile(){
    return(
    <> 
        <div className="profile">
            <div className="photo-profile"/>
            <h1>Gustavo Gomes</h1>
            
                <h2>
                    <div>
                    <Typing loop="true">
                        <Typing.Speed ms={50} />
                            <span>Frontend Engineer</span>
                        <Typing.Delay ms={1000} />
                        <Typing.Backspace count={20} />
                            <span>Computer Science Student</span>
                        <Typing.Delay ms={1000} />
                        <Typing.Backspace count={30} />
                    </Typing>
                    </div>
                </h2>
               

           <div className="about">
                <h1 className="about-h1">
                    Hey, welcome! 👋🏽
                </h1>
                <p>
                    I'am Software Engineer with specialty in JavaScript, Typescript, ReactJS and NodeJS .
                    <br />
                    I'am also a Computer Science student at Centro Universitário de Brasília.
                    <br />
                    I'am an admirer of Technology and Innovation, I am always looking for new knowledge so that I can achieve results with them.
                    <br />
                    My goal is to make people's lives easier through Technology.
                </p>
            </div>
        </div>
        <Cards />
        <Contact />
        <Footer />
    </>
    );
}

