import React, { Fragment, useState } from 'react';
import Select from 'react-select';

import './index.css'

function Filter(props) {

    /* 
        props must contain:
        - title of the filter
        - options that can be set in the filter 
     */
    function setId(name) {
        let arr = name.trim().split(" ");
        return arr.join("")
        
    }

    function setOptions(array) {
        var options = [];
        for (var i = 0; i < array.length; i++){
            console.log("SET OPTIONS: array: ", array);
            options[i] = {
                'value': array[i].toLowerCase(),
                'label': array[i]
            }
        }
        return options
    }

    return (
        <div id="filter-main">
            <p id="filter-title"><b>{ props.title }</b></p>
            <div id="filter-options" style={{color: "black"}}>
                <Select
                    isMulti
                    options={ setOptions(props.options) }
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div>
            
        </div>
    );
}

export default Filter;