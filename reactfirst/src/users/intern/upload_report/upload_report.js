import React, { useState } from 'react';
import {Button} from "@mui/material";
import {sendFile} from "./requests";

const UploadReport = ({username}) => {
    const [file, setFile] = useState();

    const onFileUpload = () => {
        const formData = new FormData();
        formData.append(
            "myFile",
            file
        );
        sendFile(username, formData);
    };

    const onFileChange = event => {
        console.log(event.target.files[0])
        setFile(event.target.files[0]);
    };


    return (
        <>
            <input type="file" onChange={onFileChange} />
            <Button onClick={onFileUpload}>שלח קובץ</Button>
        </>
    )
}

export default UploadReport;