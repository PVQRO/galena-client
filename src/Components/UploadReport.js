import React, { Fragment, useState, useEffect } from 'react';
import MyDropzone from './MyDropZone';
import { Button } from 'reactstrap';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

import { getReports, postReports } from '../API';

function UploadReport(props) {

    const [ files, setFiles ] = useState([])
    const [ b64File, setb64File ] = useState()

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

        let hours = date.getHours() > 10 ? String(date.getHours()) : String('0' + date.getHours())
        let minutes = date.getMinutes() > 10 ? String(date.getMinutes()) : String('0' + date.getMinutes())
        let seconds = date.getSeconds() > 10 ? String(date.getSeconds()) : String('0' + date.getSeconds())


        let time=(`${hours}:${minutes}:${seconds}`)
        
        timestamp[0] = Date.now();
        timestamp[1] = Date().toLocaleString();
        timestamp[2] = fecha
        timestamp[3] = time
        
        // console.log(timestamp[1]);

        return timestamp
    }

    useEffect(()=>{
        console.log(b64File)
    }, [b64File])

    const saveFiles = async () => {
        let report = {}
        console.log(create_UUID())
        console.log("SAVE FILES: files: ", files)
        files.forEach(file => {
            report = {
                reportID: create_UUID(),
                title: file.name.substring(0, file.name.length-4),
                status: 1,
                inclusionDate: getTimeStamp()[2],
                inclusionTime: getTimeStamp()[3],
                inclusionDateLong: getTimeStamp()[1],
                inclusionTimeStamp: getTimeStamp()[0],
                report: file,
                // b64File: b64File,
                nlpDate: null,
                url: '#',
                user: 'Fadel'
            }
            // reports.push(report)
            console.log("SAVE FILE: inclusionDateLong: ", report.inclusionDateLong)
            props.setDatos([...props.datos, report])
        })
        // Reset the files
        console.log("SAVE FILES: empty files")
        setFiles([])

        await postReports(report)
        
        // console.log(reports)
        // props.setDatos([...props.datos, reports[0]])

    }

    return (
        <div>
            <Fragment>
                <MyDropzone setFiles={setFiles} setb64File={setb64File}/>
                <Button className="btn-block" color="info" onClick={saveFiles} disabled={files.length===0 ? true : false} hidden={files.length===0 ? true : false}>
                    Upload report(s)
                </Button>
            </Fragment>
        </div>
    );
}

export default UploadReport;
