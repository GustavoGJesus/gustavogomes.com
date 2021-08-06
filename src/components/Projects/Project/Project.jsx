import React from 'react';

import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

import useStyles from './style.js'

const Project = ({ project }) => {
    const classes = useStyles();
    
    return(
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={project.image} title={project.title} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography className={classes.typographyStyleTitle} variant="h5" gutterButton>
                            {project.title}
                        </Typography>
                    </div>
                    <Typography className={classes.typographyStyleDescription} variant="body2" color="textSecondary">
                        {project.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="GitHub" href={project.url}>
                    <GitHubIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
};

export default Project;