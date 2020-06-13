import React from 'react'
import './index.css'


export default function WhatItDoesPage(){


    return(<React.Fragment>
            <div className="row whatitdoes">
                <div className="main-description">
                    <h3 className="section-title"><b>WHAT IT DOES</b></h3>
                    <br />
                    <br />
                    <br />
                    <p className="monospace">Doctors and researchers will be able to extract from the anonymised medical reports the variables of interest of the patients affected by Covid-19 and other pathologies through natural language processing, create their own databases, share them among their colleagues or even among other research groups from different communities or countries.</p>
                </div>
            </div>
            <div className="row replicable-description">
                <div className="col">
                    <h5><b>THE SOLUTION’S IMPACT TO THE CRISIS</b></h5>
                    <br />
                    <p className="monospace">Our platform will allow a more united collaboration between researchers, providing a tool to share ideas, projects and data. All this, with the intention of accelerating the investigation and using prediction tools based on artificial intelligence or other statistical methods (in which large data samples are required) to fight and defeat the Covid-19</p>
                </div>
                <div className="col">
                    <h5><b>HOW CAN BE REPLICABLE IN OTHER CONTEXTS</b></h5>
                    <br />
                    <p className="monospace">The extraction of data through clinical reports through natural language processing and the creation of a database could be carried out for the study and investigation of all medical and surgical pathologies.</p>
                </div>
                <div className="col">
                    <h5><b>OTHER ENVIRONMENTS</b></h5>
                    <br />
                    <p className="monospace">The use of this tool could cover all disciplines related to health, medicine, nursing, health administration, preclinical sciences, pharmaceutical industry, health organizations, prevention and epidemiology institutions.</p>
                </div>
            </div>
            </React.Fragment>)
}