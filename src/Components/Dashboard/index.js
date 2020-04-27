import React, { Fragment, useState } from 'react';
import { Col, Row, Button } from 'reactstrap';
import Filters from '../Filters/index';
import DatabaseViewer from '../DatabaseViewer/index';

import './index.css';

function Dashboard() {

    const [ filters, setFilters ] = useState([]);



    const nullMargin = {
        marginLeft: '0px',
        marginRight: '0px',
    }


    return (
        <Fragment>
            <div id="filters-presentation">
            <Row style={nullMargin}>
                <Col><h2 style={nullMargin}>The Database</h2></Col>
            </Row>
            <Row style={nullMargin}>
                <Col style={nullMargin}>
                    <p className="filters-description">
                        Apply the desired filters in order to obtain your customized version of the database.
                    </p>
                </Col>
            </Row>
            </div>
            <div id="filters-main">
                <Row>
                    <Col xs="2">
                        <div id="db-main">
                            <Filters></Filters>
                        </div>
                    </Col>
                    <Col>
                        <DatabaseViewer filters={filters} />
                    </Col>
                </Row>
                
            </div>
        </Fragment>
    );
}

export default Dashboard;
