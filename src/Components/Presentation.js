import React, { Fragment } from 'react';

import ButtonLink from './ButtonLink';

import "../Style/Presentation.css";
import { Col } from 'reactstrap';

function Presentation() {

    return (
        <div id="presentation-main">
            <div>
                <h1>Proyecto Galena</h1>
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