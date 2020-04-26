import React, { Fragment } from 'react';
import { Col, Row, Button } from 'reactstrap';
import Filters from '../Filters/index';

import './index.css';

function Dashboard() {

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
                <div id="db-main">
                    <Filters></Filters>
                </div>
            </div>
        </Fragment>
    );
}

export default Dashboard;
