import React, {Fragment, useEffect, useState} from "react";
import styled from "styled-components";
import Dropdown from "../../../components/dropdown";
import MaterialTable from "material-table";
import {getCompanies, getCompanyData} from "./requests";
import tableIcons from "./MaterialTableIcons";
import Button from "../../../components/button";

const Div = styled.div`
  width: 400px;
  height: auto;
  margin-top: 100px;
  display: flex;
`
// const Button = styled.button`
//   width: auto;
//   background: #7A5CFA;
//   height: 50px;
//   margin: 150px 400px 200px;
//   color: #FFFFFF
//

const ButtonWrapper = styled.div`
  margin: 150px 400px 200px;
`

export const AssignInternships = () => {
    const [companies, setCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState();
    const [companyData, setCompanyData] = useState();
    const [selectedRow, setSelectedRow] = useState(null);

    console.log("assign" ,companies);

    useEffect(() => {
        getCompanies(setCompanies);
    }, [])

    useEffect(() => {
        setSelectedCompany(companies[0])
    }, [companies])

    useEffect(() => {
        getCompanyData(setCompanyData);
    }, [selectedCompany])

    // const options = [{value: 1, label: "מאי וייץ"}, { value: 2, label: "חי מתתיהו" }] ;

    const columns = [
        {
            title: "שם",
            field: "name",
            cellStyle: {
               width: "150px"
            }
        },
        {
            title: "שבץ להתמחות",
            field: "assign",
            render: rowData => (
                <>
                    <input type="checkbox"/>
                </>
            ),
            cellStyle: {
                justifyContent: "center",
                width: "150px"
            }
        }
    ];

    return (
        <Fragment>
            <Dropdown options={companies} placeholder={"בחר חברה"} width='200px' height="100px"/>
            <Div>
                <MaterialTable pageSize={30} title="מועמדים" data={companyData} columns={columns} icons={tableIcons}
                   options={
                       {
                           search: false,
                           paging: false,
                           pageSize: 10,
                           rowStyle: rowData => ({
                               backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
                           })
                       }}
                   onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
                />
            </Div>
            <ButtonWrapper>
                <Button value={"שבץ להתמחות"}/>
            </ButtonWrapper>
        </Fragment>
    );
};




