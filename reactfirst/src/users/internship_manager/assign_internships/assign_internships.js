import React, {Fragment, useEffect, useState} from "react";
import styled from "styled-components";
import Dropdown from "../../../components/dropdown";
import MaterialTable from "material-table";
import {getCompanies, getCompanyData} from "./requests";
import tableIcons from "./MaterialTableIcons";
import Button from "../../../components/button";

const Div = styled.div`
  width: 1000px;
  height: auto;
  margin-top: 50px;
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

export const Table = () => {
    const [companies, setCompanies] = useState();
    const [selectedCompany, setSelectedCompany] = useState();
    const [companyData, setCompanyData] = useState();
    const [selectedRow, setSelectedRow] = useState(null);

    useEffect(() => {
        getCompanies(setCompanies);
    }, [])

    useEffect(() => {
        getCompanyData(setCompanyData);
    }, [companies])

    // const options = [{value: 1, label: "מאי וייץ"}, { value: 2, label: "חי מתתיהו" }] ;

    const columns = [
        {
            title: "שם",
            field: "name",
        },
        {
            title: "סטטוס",
            field: "status",
        },
        {
            title: "עבר/לא עבר",
            field: "pass",
            cellStyle:{ position: 'center' }
        },
        {
            title: "שבץ להתמחות",
            field: "assign",
            render: rowData => (
                <>
                    <input type="checkbox"/>
                </>
            )
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
                               actions={[
                                   {
                                       icon: tableIcons.Check,
                                       tooltip: "בחר מועמד",
                                       onClick: (rowData) => setSelectedRow(rowData),
                                   }
                               ]}
                />
            </Div>
            <ButtonWrapper>
                <Button value={"שבץ להתמחות"}/>
            </ButtonWrapper>
        </Fragment>
    );
};




