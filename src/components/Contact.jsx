import React from 'react'

import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import DescriptionIcon from '@material-ui/icons/Description';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import useStyles from '../styles/contact.scss'

export default function Contact(){
    return(
        <div id="contact">
            <h1 id="h1-contact">Contact</h1>
            <a href="mailto:ggomesdejesus01@gmail.com" className="link-contact">
                <EmailTwoToneIcon className="icons"/>
            </a>
            <a href="https://www.notion.so/Gustavo-Gomes-de-Jesus-2a876798c84e4bcbb9261918eb436ee7" className="link-contact">
                <DescriptionIcon className="icons"/>
            </a>
            <a href="https://www.linkedin.com/in/gustavo-gomes-2391b71a6/" className="link-contact">
                <LinkedInIcon className="icons"/>
            </a>
            <a href="https://github.com/GustavoGJesus" className="link-contact">
                <GitHubIcon className="icons"/>
            </a>
            <a href="https://www.instagram.com/gustavog_dev/" className="link-contact">
                <InstagramIcon className="icons"/>
            </a>
            <a href="https://twitter.com/Gustavo_JGomes" className="link-contact">
                <TwitterIcon className="icons"/>
            </a>
        </div>
    )
}