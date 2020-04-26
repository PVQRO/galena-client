import React, { Fragment, useState } from 'react';
import { Table, Row, Col, Button, UncontrolledTooltip } from 'reactstrap';


function List(props) {

    return (
        <Fragment>
            <br/>
            <Table size="sm">
                <thead>
                    <tr>
                    <th>Report ID</th>
                    <th>Title</th>
                    <th>Estado</th>
                    <th>Fecha inclusión</th>
                    <th>Hora de inclusión</th>
                    <th>Fecha de metadatos</th>
                    <th>Acceso a metadatos</th>
                    </tr>
                </thead>
                <tbody>
                    {props.datos.map(r => (
                        <tr>
                        <th scope="row">{r.reportID}</th>
                        <td><span id={'ID' + r.reportID}>{r.title.length > 15 ? r.title.substring(0, 15) + "..." : r.title}</span></td>
                        {r.title.length > 15 && 
                        <UncontrolledTooltip style={{marginTop: "3px"}} placement="bottom"  target={'ID' + r.reportID}>
                            {r.title}
                        </UncontrolledTooltip>
                        }
                        <td>{r.status===10 ? 'Completado' : 'Pendiente extracción'}</td>
                        <td>{r.inclusionDate }</td>
                        <td>{r.inclusionTime}</td>
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
