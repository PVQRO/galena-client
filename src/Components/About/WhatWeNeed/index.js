import React from 'react';
import financing from '../../../images/financing.png';
import developers from '../../../images/developers.png';
import associates from '../../../images/associates.png';
import './index.css';

export default function WhatWeNeed(props){

    return(<div className="row what-we-need">
                <div className="main-description">
                    <h3 className="section-title"><b>WHAT WE NEED TO CONTINUE THE PROJECT</b></h3>
                    <br />
                    <br />
                    <br />
                    <p className="monospace">To be successful and implement the platform, we will have to find several private or public centers with which to make a use case and a validation test of its function and utility, in order to scale it to more centers. Implement Hospitals of a certain size and quickly produce impact. For this we will need the following:</p>
                    <br />
                    <div className="row">
                        <div className="col need">
                            <img src={financing}></img>
                            <div className="description-need monospace"><h1>Financing</h1></div>
                        </div>
                        <div className="col need">
                            <img src={associates}></img>
                            <div className="description-need monospace"><h1>Associates</h1></div>
                        </div>
                        <div className="col need">
                            <img src={developers}></img>
                            <div className="description-need monospace"><h1>Developers</h1></div>
                        </div>
                    </div>
                </div>
    </div>);
}
