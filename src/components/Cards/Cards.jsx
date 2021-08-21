import { useEffect, useState, useRef } from "react";

import '../Cards/cards.scss'


export default function CardMotion(){
   const carousel = useRef(null);
    
   const data = [
        {
            "id": "1",
            "name": "My GitHub" ,
            "description": "Local onde eu coloco os meus Projetos pessoais e estudos",
            "image": "https://image.flaticon.com/icons/png/512/25/25231.png",
            "link": "https://github.com/GustavoGJesus"
        },
        {
            "id": "2",
            "name": "My Artigos" ,
            "description": "Meus artigos sobre Tecnologia e Inovação ",
            "image": "https://pingback.com/android-chrome-256x256.png",
            "link": "https://pingback.com/gustavo-gomes"
        }
    
    ]

    return(
    <>
        <h1>Some Projects</h1>
            <body className="body">
                <div className="container">
                    <div className="cards" ref={carousel}>
                        {data.map((item) => {
                            const{id, name, description, image, link} = item;
                        return(
                            <div className="item" key={id}>
                                <div className="image">
                                    <img src={image} alt={name} />
                                </div>
                                <div className="info">
                                    <span className="name">{name}</span>
                                    <span className="description">{description}</span>
                                </div>
                                <a href={link}>
                                    <button type="submit" >
                                        Visit
                                    </button>
                                </a>
                                </div>
                            );
                        })}
                </div>
            </div>
        </body>
    </>
    );
};