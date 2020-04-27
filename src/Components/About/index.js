import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import './index.css';

export default function AboutPage(){


    return <div className="container">
            <div className="row">
                <div className="col contributor-image">
                    <img src="pablo.png"/>
                </div>
                <div className="col">
                    <div className="presentation">
                        <div className="name"><h2>Pablo Vaquero Martínez</h2></div>
                        <div className="current-position"><h5><i>Medical student</i></h5></div>
                        <br/>
                        <div className="description">Passionate about medicine and greatly interested in all the technological advances of our era, focused on the diagnosis and treatment of pathologies, but also to provide a quality of life and care to the patients. Always open to the development of new projects</div>
                        <br/>
                        <div className="social-media"><a href="https://www.linkedin.com/in/pablo-vaquero-mart%C3%ADnez-162088196/"><FaLinkedin size="2em"/></a></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col contributor-image">
                    <img src="pablo.png"/>
                </div>
                <div className="col">
                    <div className="presentation">
                        <div className="name"><h2>Pablo Vaquero Martínez</h2></div>
                        <div className="current-position"><h5><i>Medical student</i></h5></div>
                        <br/>
                        <div className="description">Passionate about medicine and greatly interested in all the technological advances of our era, focused on the diagnosis and treatment of pathologies, but also to provide a quality of life and care to the patients. Always open to the development of new projects</div>
                        <br/>
                        <div className="social-media"><a href="https://www.linkedin.com/in/pablo-vaquero-mart%C3%ADnez-162088196/"><FaLinkedin size="2em"/></a></div>
                    </div>
                </div>
            </div>

        </div>

}