import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {createInternship} from "./requests";
import PopUp from "../../../components/popup";
import {Select} from "../../guest/register/register";
import {getPrograms} from "../../company_representive/create_intership/requests";
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

const Button = styled.button`
  width: auto;
  height: 30px;
  margin: 150px 300px 200px;
  background: #7A5CFA;
  color: #FFFFFF
`

const CreateInternship = () => {
    const [program, setProgram] = useState("");
    const [company, setCompany] = useState("");
    const [internshipName, setInternshipName] = useState("");
    const [internshipDescription, setInternshipDescription] = useState("");
    const [demands, setDemands] = useState("");
    const [popup, setPopup] = useState(false);
    const [programs, setPrograms] = useState([]);
    let history = useHistory();

    useEffect(() => {
        getPrograms(setPrograms);
    }, []);

    const onSubmit = () => {
        createInternship(company,internshipName,internshipDescription,demands, program)
        setPopup(true);
    }

    return (
        <Container>
            { popup && <PopUp trigger={popup} setTrigger={() => history.push("/njsw36/")}>
                {`נוצרה ההתמחות:  "${internshipName}"  `}
            </PopUp>}
            <Label>שם התוכנית</Label>
            <Select id="program" value={program} onChange={e => setProgram(e.target.value)}>
                {programs && programs.map(option => <option key={option} value={option}>{option}</option>)}
            </Select>
            <Label>שם חברה</Label>
            <Input type="text" value={company} onChange={e => setCompany(e.target.value)}/>
            <Label>שם ההתמחות</Label>
            <Input type="text" value={internshipName} onChange={e => setInternshipName(e.target.value)}/>
            <Label>תיאור ההתמחות</Label>
            <Input type="text" value={internshipDescription} onChange={(e) => setInternshipDescription(e.target.value)}/>
            <Label>דרישות</Label>
            <Input type="text" value={demands} onChange={e => setDemands(e.target.value)}/>
            <Button onClick={() => onSubmit()} disabled={!(company && internshipName && internshipDescription && demands && program)}>צור התמחות</Button>
        </Container>
    )
}
export default CreateInternship;