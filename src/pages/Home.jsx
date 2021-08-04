import React, { useEffect, useState } from 'react';
import Styles from '../styles/home.scss'

import Typing from 'react-typing-animation'
export default function Home (){
    const title = "Gustavo Gomes";
    const name = "Gustavo Gomes"
    const descriptionOne = "Frontend Engineer";
  
return(
  <div id="page-home">
    <div id="profile"/>
    <title>{title}</title>
    <h1>{name}</h1>
    <Typing>
      <h2>{descriptionOne}</h2>
      <Typing.Delay ms={1000} />
    </Typing>
        
    <div id="about">
      <p>
         Hey, I'am Software Engineer with specialty in JavaScript / NodeJs / React
      </p>
    </div>


  </div>
      
    )
}
