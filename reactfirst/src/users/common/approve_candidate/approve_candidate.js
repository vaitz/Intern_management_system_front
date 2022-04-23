import React, {Fragment, useEffect, useState} from "react";
import styled from "styled-components";
import MaterialTable from "material-table";
import tableIcons from "../../program_manager/assign_internships/MaterialTableIcons";
import Button from "../../../components/button";
import {approveCandidates, getCandidates} from "./requests";

const Div = styled.div`
  width: 400px;
  height: auto;
  margin-top: 50px;
  display: flex;
`

const ButtonWrapper = styled.div`
  margin: 150px 400px 200px;
`

const ApproveCandidate = ({ username, program }) => {
    const [candidates, setCandidates] = useState([]);
    const [disableButton, setDisableButton] = useState(true);

    useEffect(() => {
        getCandidates(username, program, setCandidates, formatCandidates);
    }, [])

    const formatCandidates = (candidates) =>
        candidates.map((candidate, index) => ({
            ...candidate,
            checked: false,
            id: index
        }));


    const columns = [
        {
            title: "שם פרטי",
            field: "first_name",
            cellStyle: {
                textAlign: "center",
                width: "400px"
            }
        },
        {
            title: "שם משפחה",
            field: "last_name",
            cellStyle: {
                textAlign: "center",
                width: "400px"
            }
        },
        {
            title: "שם ההתמחות",
            field: "internship_name",
            cellStyle: {
                textAlign: "center",
                width: "400px"
            }
        },
        {
            title: "עדיפות",
            field: "priority",
            cellStyle: {
                textAlign: "center",
                width: "400px"
            }
        },
        {
            title: "אישור המועמד",
            field: "assign",
            type: 'boolean',
            render: rowData => (
                <>
                    <input type="checkbox" onClick={() => handleOnChange(rowData.id)}/>
                </>
            ),
            cellStyle: {
                textAlign: "center",
                width: "200px"
            }
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
        approveCandidates(username, program, getApprovedCandidates(candidates)).then(() => getCandidates(username, 122, setCandidates, formatCandidates));
    }

    const getApprovedCandidates = (candidates) =>
        candidates.filter(candidate => candidate.checked === true).map(candidate => ({
            username: candidate.username,
            internship_id: candidate.internship_id
        }))


    return (
        <Fragment>
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
                               textAlign: "center",
                               width: "400px"
                           }
                       }}
                />
            </Div>
            <ButtonWrapper>
                <Button value={"אשר מתמחים"} disabled={disableButton} onClick={onClick}/>
            </ButtonWrapper>
        </Fragment>
    )
}

export default ApproveCandidate;