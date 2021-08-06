import React from 'react';
import { Grid} from '@material-ui/core';

import Project from './Project/Project';
import style from './Project/style'
import styleScss from '../../styles/projects.scss'

import img from './assetsProject/ecommerce.gif'


const projects = [
    {
        id: 1,
        title: 'Tesla Clone Website',
        description: 'Rect and material-ui',
        image: 'https://github.com/GustavoGJesus/GustavoGomes/blob/master/src/assets/tesla.gif?raw=true',
    },
    {
        id: 2,
        title: 'E commerce Website',
        description: 'Rect and material-ui',
        image: 'https://github.com/GustavoGJesus/GustavoGomes/blob/master/src/assets/ecommerce.gif?raw=true',
    },
    
    
];
const Projects = () => {
    return(
        <main>
            <h1 className="projects-h1">
                Some projects
            </h1>
            <Grid container justify="center" spacing={2} overFlowX="hidden">
                {projects.map((project) =>(
                    <Grid item key={project.id} xs={12} sm={6} md={4} lg={3}>
                        <Project project={project}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Projects; 