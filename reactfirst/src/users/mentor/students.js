import React, { useEffect, useState} from "react";
import styled from "styled-components";
import MaterialTable from "material-table";
import tableIcons from "../internship_manager/assign_internships/MaterialTableIcons";
import { getStudentsRequest} from "./requests";

const Div = styled.div`
  height: auto;
  display: flex;
  background-color: #F7F8FC;
`

const Students = () => {
    const [students, setStudents] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);

    const columns = [
        {
            title: "שם פרטי",
            field: "firstName",
            cellStyle: {
                textAlign: "center",
                width: "150px"
}
        },
        {
            title: "שם משפחה",
            field: "lastName",
            cellStyle: {
                textAlign: "center",
                width: "150px"
            }
        },
        {
            title: "התמחות",
            field: "internship",
            cellStyle: {
                textAlign: "center",
                width: "150px"
            }
        },
        {
            title: "שעות בהתמחות",
            field: "hours",
            cellStyle: {
                textAlign: "center",
                width: "150px"
            }
        }

    ];

    useEffect(() => {
        getStudentsRequest(setStudents);
    }, [])

    return (
        <Div>
            <MaterialTable
                pageSize={30}
                title="סטודנטים"
                data={students}
                columns={columns}
                icons={tableIcons}
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
    )
}

export default Students;