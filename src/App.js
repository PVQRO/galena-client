import React, { Fragment } from 'react';
import List from './Components/List'
import UploadReport from './Components/UploadReport';
import { Col, Row } from 'reactstrap'
import Details from './Components/Details';
import Header from './Components/Header';
import Controlador from './Components/Controlador';

function App() {
  return (
    <div className="App">

      <Fragment>
      <Header />
      <br/>
      <br/>
        <Row>
            <Col className="col">
            </Col>
            <Col className="col-6">
                <Controlador />
            </Col>
            <Col className="col">
            </Col>
        </Row>
    </Fragment>
    </div>
  );
}

export default App;
