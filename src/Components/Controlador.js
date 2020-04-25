import React, { Fragment, useState, useEffect } from 'react';
import List from './List'
import UploadReport from './UploadReport';
import { Col, Row } from 'reactstrap'
import Details from './Details';
import Header from './Header';

import { getReports } from '../API';

function Controlador() {

    const [ datos, setDatos ] = useState([
       /*  {
            reportID: '0000-0011',
            status: 10,
            inclusionDate: '5-4-2020    ',
            nlpDate: '5-4-2020',
            url: '#',
            user: 'Fadel'
        },
        {
            reportID: '0000-0012',
            status: 10,
            inclusionDate: '5-4-2020',
            nlpDate: '5-4-2020',
            url: '#',
            user: 'Fadel'
        },
        {
            reportID: '0000-0012',
            status: 1,
            inclusionDate: '5-4-2020',
            nlpDate: '5-4-2020',
            url: '#',
            user: 'Fadel'
        } */
        {
            reportID: '0000-0012',
            status: 1,
            inclusionDate: '26-4-2020',
            nlpDate: '26-4-2020',
            url: '#',
            user: 'Fadel'
        }
    ]);

    // useEffect(()=>{
    //     console.log(datos)
    // },[datos])

    useEffect(()=>{
        const consultaApi = async () => {
            const datos = await getReports()
            setDatos(datos)
            console.log('consultaApi: datos: ', datos)
        }
        consultaApi();
        console.log(datos)
    },[])

    return (
        <div className="App">

            <Fragment>
                <UploadReport setDatos={setDatos} datos={datos}/>
                <h3 style={{ textAlign: "center" }}>Uploaded reports to the DB</h3>
                <br/>
                <List datos={datos}/>
            </Fragment>
        </div>
    );
}

export default Controlador;
