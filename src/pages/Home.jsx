import React, { useEffect, useState } from 'react';
import Styles from '../styles/home.scss'

import Typing from 'react-typing-animation'
function Home (){
    
  
  return(
        <div id="page-home">
          <div id="profile"/>
          <h1>Gustavo Gomes</h1>
          <Typing>
            <h2>Frontend Engineer React</h2>
            <Typing.Delay ms={1000} />
           </Typing>
        </div>
    )
}
export default Home;