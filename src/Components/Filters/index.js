import React, { Fragment, useState, useEffect } from 'react';
import Filter from '../Filter/index';
import './index.css';

function Filters(){

    /* 
       Filters that can be applied to the DB. 
       Populate the filters here for a first version 
    */
    const [ filters, setFilters ] = useState([
        {
            title: "Gender",
            options: ["Male", "Female"]
        },
        {
            title: "Patient Status",
            options: ["Recovered", "Not recovered", "Dead from COVID-19", "Dead from other cause"]
        },
        {
            title: "Symptoms in recovery phase",
            options: ["Yes", "No"]
        },
    ]);

   /* Get the filters every time we enter this component */ 
    useEffect(()=>{
        console.log("FILTERS: useEffect: Get the filters avilable")
    }, [])

    return (
        <div style={{marginLeft: "10px"}}>
            {filters.map(filter =>(
                <Filter title={filter.title} options={filter.options}></Filter>
            ))}
        </div>
    );
}

export default Filters;