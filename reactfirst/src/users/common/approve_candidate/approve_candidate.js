import React, {Fragment, useEffect, useState} from "react";
import styled from "styled-components";
import MaterialTable from "material-table";
import tableIcons from "../../program_manager/assign_internships/MaterialTableIcons";
import Button from "../../../components/button";
import {approveCandidates, getCandidates} from "./requests";
import {getPrograms} from "../../company_representive/create_intership/requests";
import Dropdown from "../../../components/dropdown";

const Div = styled.div`
  height: auto;
  margin-top: 50px;
  display: flex;
`

const ButtonWrapper = styled.div`
  margin: 150px 400px 200px;
`

const ApproveCandidate = ({ username, userType }) => {
    const [candidates, setCandidates] = useState([]);
    const [disableButton, setDisableButton] = useState(true);
    const [programs, setPrograms] = useState([]);
    const [selectedProgram, setSelectedProgram] = useState();

    useEffect(() => {
        getPrograms(setPrograms);
    }, []);

    useEffect(() => {
        if (selectedProgram) {
            getCandidates(username, userType, selectedProgram, setCandidates, formatCandidates);
        }
    }, [selectedProgram]);

    const formatCandidates = (candidates) =>
        candidates.map((candidate, index) => ({
            ...candidate,
            checked: false,
            id: index
        }));


    const columns = [
        {
            title: "שם פרטי",
            field: "first_name"
        },
        {
            title: "שם משפחה",
            field: "last_name"
        },
        {
            title: "שם ההתמחות",
            field: "internship_name"
        },
        {
            title: "עדיפות",
            field: "priority"
        },
        {
            title: "אישור המועמד",
            field: "assign",
            type: 'boolean',
            render: rowData => (
                <>
                    {!rowData.status_decision_by_company && <input type="checkbox" onClick={() => handleOnChange(rowData.id)}/>}
                </>
            )
        }
    ];

    const handleOnChange = (position) => {
        const updatedCheckedState = candidates.map((candidate, index) => {
            const newChecked = index === position ? !candidate.checked : candidate.checked;
            return {...candidate, checked: newChecked};
        });
        setCandidates(updatedCheckedState);
        updatedCheckedState.map(({checked}) => {
            if (checked) {
                setDisableButton(false);
            }
        })
    }

    const onClick = () => {
        approveCandidates(username, userType, selectedProgram, getApprovedCandidates(candidates)).then(() => getCandidates(username, userType, selectedProgram, setCandidates, formatCandidates));
    }

    const getApprovedCandidates = (candidates) =>
        candidates.filter(candidate => candidate.checked === true).map(candidate => ({
            username: candidate.username,
            internship_id: candidate.internship_id
        }))


    return (
        <Fragment>
            <Dropdown options={programs} placeholder={"בחר תוכנית"} value={selectedProgram} onChange={ program => setSelectedProgram(program)} />
            {selectedProgram &&
                <>
                    <Div>
                        <MaterialTable
                            pageSize={30} title="מועמדים"
                            data={candidates}
                            columns={columns}
                            icons={tableIcons}
                            options={
                                {
                                    search: false,
                                    paging: false,
                                    pageSize: 10,
                                    headerStyle: {
                                        width: "200px",
                                        textAlign: "center"
                                    },
                                    cellStyle: {
                                        width: "200px",
                                        textAlign: "center"
                                    }
                                }}
                        />
                    </Div>
                    <ButtonWrapper>
                        <Button value={"אשר מתמחים"} disabled={disableButton} onClick={onClick}/>
                    </ButtonWrapper>
                </>
}
        </Fragment>
    )
}

export default ApproveCandidate;