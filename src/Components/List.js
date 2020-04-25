import React, { Fragment, useState } from 'react';
import { Table, Row, Col, Button } from 'reactstrap';

function List(props) {

    return (
        <Fragment>

            {/* <Button className="btn-block">
                Nuevo informe
            </Button> */}
            <br/>
            <Table size="sm">
                <thead>
                    <tr>
                    <th>Report ID</th>
                    <th>Estado</th>
                    <th>Fecha inclusión</th>
                    <th>Fecha de metadatos</th>
                    <th>Acceso a metadatos</th>
                    </tr>
                </thead>
                <tbody>
                    {props.datos.map(r => (
                        <tr>
                        <th scope="row">{r.reportID}</th>
                        <td>{r.status===10 ? 'Completado' : 'Pendiente extracción'}</td>
                        <td>{r.inclusionDate }</td>
                        <td>{r.nlpDate}</td>
                        <td><a href={r.url}>Acceso</a></td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            
        </Fragment>
    );
}

export default List;
