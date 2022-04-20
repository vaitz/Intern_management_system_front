import React, {useEffect, useState} from "react";
import {getPrograms} from "./requests";
import MaterialTable from "material-table";
import tableIcons from "../../program_manager/assign_internships/MaterialTableIcons";

const Programs = () => {
    const [programs, setPrograms] = useState();

    useEffect(() => {
        getPrograms(setPrograms);
    }, [])

    const columns = [
        {
            title: "שם התוכנית",
            field: "program",
            cellStyle: {
                textAlign: "center",
                width: "200px",
                margin: "0 26px 0 0"
            }
        },
        {
            title: "שנה",
            field: "year",
            cellStyle: {
                textAlign: "center",
                width: "200px"
            }
        },
        {
            title: "סמסטר",
            field: "semester",
            cellStyle: {
                textAlign: "center",
                width: "200px"
            }
        },
        {
            title: "מספר עדיפויות לבחירה",
            field: "prioritiesAmount",
            cellStyle: {
                textAlign: "center",
                width: "200px"
            }
        },
        {
            title: "שעות נדרשות",
            field: "hoursRequired",
            cellStyle: {
                textAlign: "center",
                width: "200px"
            }
        },
        {
            title: "מחלקה",
            field: "department",
            cellStyle: {
                textAlign: "center",
                width: "200px"
            }
        },
        {
            title: "מנהל התמחות",
            field: "managerName",
            cellStyle: {
                textAlign: "center",
                width: "200px"
            }
        },
        {
            title: "פעיל",
            field: "activeProgram",
            cellStyle: {
                textAlign: "center",
                width: "200px"
            }
        }
    ];

    return (
        <>
            <MaterialTable
                pageSize={30}
                title="תוכניות קיימות"
                data={programs}
                columns={columns}
                icons={tableIcons}
                options={
                   {
                       search: false,
                       paging: false,
                       pageSize: 10,
                       headerStyle: {
                           textAlign: "center",
                       }
                   }}
            />
        </>
    )
}

export default Programs;