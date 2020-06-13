import React from 'react'
import { AiOutlineLink } from 'react-icons/ai';
import './index.css';

export default function NewCard(props){


    return(<div className="col">
            <div className="card">
                <a href={props.link}>
                    <img className="card-img-top" src={props.img} alt="Card image cap" />
                    <div className="card-body">
                        <h6 className="card-title">{props.title}</h6>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text"><b><AiOutlineLink /> https://{props.link.split('/')[2]}</b></p>
                    </div>
                </a>
            </div>
        </div>);
}