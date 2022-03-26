import React, {Fragment, useEffect, useState} from "react";
import styled from "styled-components";
import Dropdown from "../../../components/dropdown";
import MaterialTable from "material-table";
import {assignIntern, getCompanies, getCompanyData} from "./requests";
import tableIcons from "./MaterialTableIcons";
import Button from "../../../components/button";
import Select from "react-select";

const Div = styled.div`
  width: 400px;
  height: auto;
  margin-top: 100px;
  display: flex;
`
const BaseDropDown = styled(Select)`
  width: 300px;
`

const ButtonWrapper = styled.div`
  margin: 150px 400px 200px;
`

export const AssignInternships = ({programId}) => {
    const [companies, setCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState({});
    const [companyData, setCompanyData] = useState();
    const [selectedRow, setSelectedRow] = useState(null);

    useEffect(() => {
        getCompanies({ setCompanies, programId, formatCompanies, setSelectedCompany });
    }, [])

    useEffect(() => {
        if (selectedCompany.companyName) {
            getCompanyData(setCompanyData, selectedCompany.companyName, selectedCompany.internshipName);
        }
    }, [selectedCompany])

    const formatCompanies = (data) =>
        data.map((company, index) => (
            {
                ...company,
                label: company.internshipName,
                value: index
            }
        ))

    const columns = [
        {
            title: "שם פרטי",
            field: "firstName",
            cellStyle: {
                textAlign: "center",
                width: "200px"
            }
        },
        {
            title: "שם משפחה",
            field: "lastName",
            cellStyle: {
                textAlign: "center",
                width: "200px"
            }
        },
        {
            title: "שבץ להתמחות",
            field: "assign",
            render: rowData => (
                <>
                    <input type="radio" checked={rowData?.tableData.id === selectedRow?.tableData.id}/>
                </>
            ),
            cellStyle: {
                textAlign: "center",
                width: "200px"
            }
        }
    ];

    const onClick = () => {
        console.log(selectedRow)
        assignIntern(selectedCompany, selectedRow)
    }

    return (
        <Fragment>
            <BaseDropDown options={companies} placeholder={"בחר חברה"} value={selectedCompany} />
            <Div>
                <MaterialTable pageSize={30} title="מועמדים" data={companyData} columns={columns} icons={tableIcons}
                   options={
                       {
                           search: false,
                           paging: false,
                           pageSize: 10,
                           rowStyle: rowData => ({
                               backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
                           }),
                           headerStyle: {
                               textAlign: "center",
                           }
                       }}
                   onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow))}
                />
            </Div>
            <ButtonWrapper>
                <Button value={"שבץ להתמחות"} onClick={onClick} disabled={!selectedRow}/>
            </ButtonWrapper>
        </Fragment>
    );
};




