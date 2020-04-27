import React, { Fragment } from 'react';
import { Col } from 'reactstrap';

import ButtonLink from '../ButtonLink';

import "./index.css";


function Presentation() {

    return (
        <div id="presentation-main">
            <div>
                <h1>Galena Databook</h1>
                <p> We propose a natural language processing system for medical reports, 
                    which allows the extraction of variables from patients affected by Covid19. 
                    In this way, joint databases can be created and shared  
                </p>

                <ButtonLink id="button-link"></ButtonLink>
            </div>
            
               
            
        </div>
    );
}

export default Presentation;