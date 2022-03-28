import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Select from 'react-select';
import {createProgram, getProgramManagers} from "./requests";
import PopUp from "../../../components/popup";
import {useHistory} from "react-router-dom";

const Label =  styled.text`
  font-size: 18px;
  color: #666666;
  margin-top: 20px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  width:  500px;
  height: 20px;
`

const Dropdown = styled(Select)`
  width: 300px;
`

const Button = styled.button`
  width: auto;
  height: 30px;
  margin: 150px 300px 200px;
  background: #7A5CFA;
  color: #FFFFFF
`

// const customStyles = {
//     option: (provided, state) => ({
//         color: "black"
//     })
// }

const CreateProgram = () => {
    const [options, setOptions] = useState([]);
    const [programManager, setProgramManager] = useState({});
    const [internshipName, setInternshipName] = useState("");
    const [department, setDepartment] = useState("");
    const [year, setYear] = useState("");
    const [semester, setSemester] = useState("");
    const [hoursRequired, setHoursRequired] = useState("");
    const [prioritiesAmount, setPrioritiesAmount] = useState()
    const [popup, setPopup] = useState(false);
    let history = useHistory();

    const formatOptions = (options) => (
        options.map(option => ({value: option.id, label: option.first_name + " " + option.last_name }))
    )

    useEffect( () => {
         getProgramManagers(setOptions, formatOptions).then(r => console.log(r));
    }, [])

    const onSubmit = () => {
        createProgram(internshipName,year,semester, prioritiesAmount,programManager.value,hoursRequired,department)
        setPopup(true);
     }

    return (
        <Container>
            { popup && <PopUp trigger={popup} setTrigger={() => history.push("/njsw36/")}>
                {`נוצרה תוכנית התמחות חדשה:  "${internshipName}"  `}
            </PopUp>}
            <Label>שם תוכנית התמחות</Label>
            <Input type="text" value={internshipName} onChange={e => setInternshipName(e.target.value)}/>
            <Label>מחלקה</Label>
            <Input type="text" value={department} onChange={e => setDepartment(e.target.value)}/>
            <Label>שנה</Label>
            <Input type="text" value={year} onChange={(year) => setYear(year.target.value)}/>
            <Label>סמסטר</Label>
            <Input type="text" value={semester} onChange={e => setSemester(e.target.value)}/>
            <Label>שעות התמחות</Label>
            <Input type="text" value={hoursRequired} onChange={e => setHoursRequired(e.target.value)}/>
            <Label>מספר עדיפויות אשר סטודנט יבחר</Label>
            <Input type="text" value={prioritiesAmount} onChange={e => setPrioritiesAmount(e.target.value)}/>
            <Label>מנהל תוכנית התמחות</Label>
            <Dropdown onChange={setProgramManager} options={options} placeholder={"בחר מנהל"}/>
            <Button onClick={() => onSubmit()} disabled={!(programManager && internshipName && department && hoursRequired && semester && year)}>צור תוכנית התמחות</Button>
        </Container>
)
}
export default CreateProgram;