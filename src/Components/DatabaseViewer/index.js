import React, { Fragment, useState, useEffect } from 'react';
import {Table} from 'reactstrap';

import './index.css';

function DatabaseViewer(props) {

    const [ patients, setPatients ] = useState([]);

    useEffect(() => {
        console.log("DATABASE VIEWER: useEffect");

        /* Create patients */
        const patients = [
            {
                id: 1,
                name: "####",
                gender: "Male",
                status: "Dead from COVID-19",
                symptons: "Yes"
            },
            {
                id: 2,
                name: "####",
                gender: "Male",
                status: "Dead from other cause",
                symptons: "Yes"
            },
            {
                id: 3,
                name: "####",
                gender: "Female",
                status: "Not Recovered",
                symptons: "Yes"
            },
            {
                id: 4,
                name: "####",
                gender: "Female",
                status: "Recovered",
                symptons: "No"
            },
            {
                id: 5,
                name: "####",
                gender: "Male",
                status: "Dead from COVID-19",
                symptons: "Yes"
            },
            {
                id: 6,
                name: "####",
                gender: "Female",
                status: "Recoverd",
                symptons: "No"
            },
        ];
        /* Set the patients */
        setPatients(patients);

    }, [])

    return (
        <div id="db-table-main">
            <Table size="sm">
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Patient status</th>
                        <th>Symptons in recovery phase</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map(patient =>(
                        <tr>
                            <th scope="row">{ patient.id }</th>
                            <td>{patient.name}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.status}</td>
                            <td>{patient.symptons}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );

}

export default DatabaseViewer;