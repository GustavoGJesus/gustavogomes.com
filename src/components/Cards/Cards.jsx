import { useEffect, useState, useRef } from "react";

import '../Cards/cards.css'


export default function CardMotion(){
    const [data, setData] = useState([]);
    const carousel = useRef(null);
    
    useEffect(() => {
        fetch('http://localhost:3000/static/content.json')
        .then((response) => response.json())
        .then(setData)
    }, []);

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