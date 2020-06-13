import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import './index.css';

export default function Contributor(props){

    return (
        <div className="col-3">
                    <div className="col contributor-image">
                        <img src={props.image}/>
                    </div>
                    <div className="col">
                        <div className="presentation-contributor">
                            <div className="name"><h4>{props.name}</h4></div>
                            <div className="current-position"><h7><i>{props.position}</i></h7></div>
                            { props.linkedin != undefined ? <div className="social-media"><a href={props.linkedin}><FaLinkedin size="2em"/></a></div> :  <div className="social-media"></div>}
                            <br/>
                            {props.description != undefined ? <div className="description monospace">{props.description}</div> : <div className="description monospace"></div> }
                        </div>
                    </div>
                </div>

    );
}