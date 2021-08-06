import React from 'react';
import { Grid} from '@material-ui/core';

import Project from './Project/Project';
import style from './Project/style'
import styleScss from '../../styles/projects.scss'

import LogoTalk from '../../assets/talk.gif'



const projects = [
    {
        id: 1,
        title: 'Tesla Clone Website',
        description: 'Rect and material-ui',
        image: 'https://github.com/GustavoGJesus/GustavoGomes/blob/master/src/assets/tesla.gif?raw=true',
        url: 'https://github.com/GustavoGJesus/tesla-clone'
    },
    {
        id: 2,
        title: 'E commerce Website',
        description: 'Api, Rect and material-ui',
        image: 'https://github.com/GustavoGJesus/GustavoGomes/blob/master/src/assets/store.gif?raw=true',
        url: 'https://github.com/GustavoGJesus/ECommerce-Web-Shop'
    },
    {
        id: 3,
        title: 'Movies Website',
        description: 'Api, Rect and material-ui',
        image: 'https://github.com/GustavoGJesus/GustavoGomes/blob/master/src/assets/movies.gif?raw=true',
        url: 'https://github.com/GustavoGJesus/movies-app'
    },
    
    
];
const Projects = () => {
    return(
        <main>
            <h1 className="projects-h1">
                Some projects
            </h1>
            <Grid container justify="center" backgroundColor="##a8a8b3" spacing={2}>
                {projects.map((project) =>(
                    <Grid item key={project.id}  xs={12} sm={6} md={4} lg={3}>
                        <Project project={project}/>
                    </Grid>
                ))}
            </Grid>
            <div className="separator">
            <img src={LogoTalk} alt="Gif-Projects" />
            </div>
        </main>
    );
};

export default Projects; 