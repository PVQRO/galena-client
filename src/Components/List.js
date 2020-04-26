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
                    <th>Status</th>
                    <th>Inclusion Date</th>
                    <th>Inclusion Tmime</th>
                    <th>Metadata date</th>
                    <th>Access PDF</th>
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
                        <td>{r.status===10 ? 'Done' : 'Pending'}</td>
                        <td>{r.inclusionDate }</td>
                        <td>{r.inclusionTime}</td>
                        <td>{r.nlpDate}</td>
                        {r.status===10 &&
                            <td><a href={r.url}>Access</a></td>
                        }
                        {r.status!=10 &&
                            <td style={{color: "gray"}}> No ready yet </td>
                        }
                        
                        </tr>
                    ))}
                </tbody>
            </Table>

            
        </Fragment>
    );
}

export default List;
