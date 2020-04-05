import React, { Fragment, useState, useEffect } from 'react';
import MyDropzone from './MyDropZone'
import { Button } from 'reactstrap'

function UploadReport(props) {

    const [ files, setFiles ] = useState([])

    const create_UUID = () => {
        var dt = new Date().getTime();
        var uuid = '0000-xxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }

    const getTimeStamp = () => {
    const timestamp = [];
    let date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let fecha=(`${day}-${month}-${year}`)
    
    
    timestamp[0] = Date.now();
    timestamp[1] = Date().toLocaleString();
    timestamp[2] = fecha
    
    // console.log(timestamp[1]);

    return timestamp
    }

    useEffect(()=>{
        console.log(files)
    }, [files])

    const saveFiles = () => {
        // const reports = []
        console.log(create_UUID())
        files.forEach(file => {
            const report = {
                reportID: create_UUID(),
                status: 1,
                inclusionDate: getTimeStamp()[2],
                inclusionDateLong: getTimeStamp()[1],
                inclusionTimeStamp: getTimeStamp()[0],
                report: file,
                nlpDate: null,
                url: '#',
                user: 'Fadel'
            }
            // reports.push(report)
            props.setDatos([...props.datos, report])
        })
        // console.log(reports)
        // props.setDatos([...props.datos, reports[0]])
    }

    return (
        <div>
            <Fragment>
                <MyDropzone setFiles={setFiles}/>
                <Button className="btn-block" onClick={saveFiles} disabled={files.length===0 ? true : false} hidden={files.length===0 ? true : false}>
                    Subir informe(s)
                </Button>
            </Fragment>
        </div>
    );
}

export default UploadReport;
