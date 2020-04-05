import React, {useCallback, useMemo, Fragment} from 'react';
import {useDropzone} from 'react-dropzone';
import { Button } from 'reactstrap';

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function MyDropzone(props) {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles)
    props.setFiles(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles} = useDropzone({
    accept: 'application/pdf',
    onDrop})

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject
  ]);

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Fragment>
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        
          <p>Arrastre aquí uno o más informes</p>
          <em>(Solo se aceptan ficheros PDF)</em>
        
      </div>
      <aside>
          <br/>
          {files.length===0 ? 
            '' : 
            <b>Files</b>
          }  
          <ul>{files}</ul>
      </aside>
      
    </Fragment>
  )
}

export default MyDropzone;