import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

import { Button } from 'reactstrap';
import { BsCloudUpload } from 'react-icons/bs';
import { FaDatabase } from 'react-icons/fa';
import { render } from '@testing-library/react';


function ButtonLink () {
    /* Create button link with image and href for the index page */

    const buttonPresentation = {
        width: "300px",
        height: "70px",
    };

    return (
        <div>
            <Link to="/upload">
                <Button style={buttonPresentation} color="success">Subir un informe PDF <br /> <BsCloudUpload /> </Button>
            </Link>
            <Link to="/dashboard">
                <Button style={buttonPresentation} color="success">Acceder a la base de datos <br /> <FaDatabase /> </Button>
            </Link>
        </div>
    );
    
}

export default ButtonLink;