import React, {useEffect, useState} from 'react';
import {Button} from "@mui/material";
import {getInterns} from "../approve_hours/requests";
import {sendFile} from "./requests";
import styled from "styled-components";
import Select from "react-select";

const Dropdown = styled(Select)`
  width: 300px;
  margin: 20px 0 100px;
`

const UploadReportMentor = ({ username }) => {
    const [file, setFile] = useState();
    const [interns, setInterns] = useState([]);
    const [selectedIntern, setSelectedIntern] = useState({});

    useEffect(() => {
        getInterns(username, setInterns, formatInterns)
    }, [])

    const formatInterns = (interns) => {
        return interns.map((intern, index) => ({...intern, value: index, label: intern.first_name + " " +  intern.last_name})
        )
    }

    const onFileUpload = () => {
        const formData = new FormData();
        formData.append(
            "report",
            file
        );
        sendFile(username, formData, selectedIntern.username);
    };

    const onFileChange = event => {
        setFile(event.target.files[0]);
    };


    return (
        <>
            <Dropdown options={interns} value={selectedIntern} onChange={setSelectedIntern} placeholder={"בחר מתמחה"}/>
            <input type="file" onChange={onFileChange} />
            <Button onClick={onFileUpload}>שלח קובץ</Button>
        </>
    )
}

export default UploadReportMentor;