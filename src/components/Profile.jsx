import React from 'react'; 
import Typing from 'react-typing-animation'

import Styles from '../styles/profile.scss'
import Cards from '../components/Cards/Cards'

import ReactLogo from '../assets/react.gif'
import ProjectsLogo from '../assets/projects.gif'
import Contact from './Contact';
import Footer from './Footer';

export default function Profile(){
    return(
    <> 
        <div className="profile">
            <div className="photo-profile"/>
            <h1>Gustavo Gomes</h1>
            <Typing>
                <h2>Frontend Engineer</h2>
                <Typing.Delay ms={1000} />
            </Typing>

           <div className="about">
                <h1 className="about-h1">
                    Hey!
                </h1>
                <p>
                    I'am Software Engineer with specialty in JavaScript / ReactJs / NodeJs .
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

