import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import './index.css';

export default function ContactUs(props){
    return (<div className="row contact-us">
                <div className="main-description">
                    <h3 className="section-title"><b>CONTACT US</b></h3>
                    <br />
                    <br />
                    <br />
                    <div class="row">
                        <div class="col-md-9">
                            <div class="contact-form">
                                <div class="form-group">
                                <label class="control-label col-md" for="fname">First Name:</label>
                                <div class="col-md">          
                                    <input type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname" />
                                </div>
                                </div>
                                <div class="form-group">
                                <label class="control-label col-sm" for="lname">Last Name:</label>
                                <div class="col-sm">          
                                    <input type="text" class="form-control" id="lname" placeholder="Enter Last Name" name="lname" />
                                </div>
                                </div>
                                <div class="form-group">
                                <label class="control-label col-sm" for="email">Email:</label>
                                <div class="col-sm">
                                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                                </div>
                                </div>
                                <div class="form-group">
                                <label class="control-label col-sm" for="comment">Comment:</label>
                                <div class="col-sm">
                                    <textarea class="form-control" rows="5" id="comment"></textarea>
                                </div>
                                </div>
                                <div class="form-group">        
                                <div class="col-sm-offset-2 col-sm-10">
                                    <button type="submit" class="btn" style={{"background-color":"#007bff", "color":"white"}}>Submit</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="contact-info">
                                <p className="monospace"><a href="mailto:galenadatabase@gmail.com"><AiOutlineMail /> galenadatabase@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                    
                </div>
        </div>);
}