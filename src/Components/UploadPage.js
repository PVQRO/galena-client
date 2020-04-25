import React, { Fragment } from 'react';
import { Col, Row, Button } from 'reactstrap'
import UploadReport from './UploadReport';
import Controlador from './Controlador';

function UploadPage() {

    const uploadStyle = {
        width: "100vw",
        backgroundColor: "darkslategray",
        color: "white",
        textAlign: "center",
        paddingTop:  "40px",
        width: "100vw",
        paddingBottom: "30px",
        marginBottom: "40px",
        boxShadow: "0px 7px 10px gray" 
    };

    const textStyle = {
        width: "50vw",
        fontStyle: "italic",
        fontSize: "15pt",
        textAlign: "center",
        display: "inline-block",
    }

    return (
        <Fragment>
        <div style={uploadStyle}>
            <Row>
                <Col><h2 style={{fontSize: "37pt"}}>Sube tus archivos</h2></Col>
            </Row>
            <Row>
                <Col>
                    <p style={ textStyle }>
                        Upload your PDF files to extract information related with your patients to contribute to the
                        enhacement of the database
                    </p>
                </Col>
            </Row>
        </div>      
        <Row>
            <Col className="col"></Col>
            <Col className="col-6">
                <Controlador />
                </Col>
            <Col className="col"></Col>
        </Row>
        </Fragment>
        
    );
}

export default UploadPage;