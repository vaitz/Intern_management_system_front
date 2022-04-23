import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {createInternship, getPrograms} from "./requests";
import PopUp from "../../../components/popup";
import {Select} from "../../guest/register/register";
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

const CreateInternshipCom = ({username}) => {
    const [program, setProgram] = useState("");
    const [internshipName, setInternshipName] = useState("");
    const [internshipDescription, setInternshipDescription] = useState("");
    const [demands, setDemands] = useState("");
    const [popup, setPopup] = useState(false);
    const [programs, setPrograms] = useState([]);
    const [error, setError] = useState(null);
    let history = useHistory();

    useEffect(() => {
        getPrograms(setPrograms);
    }, []);

    const onSubmit = () => {
        createInternship(setPopup,setError,program,internshipName,internshipDescription,demands,username)
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
            <Label>שם ההתמחות</Label>
            <Input type="text" value={internshipName} onChange={e => setInternshipName(e.target.value)}/>
            <Label>תיאור ההתמחות</Label>
            <Input type="text" value={internshipDescription} onChange={(e) => setInternshipDescription(e.target.value)}/>
            <Label>דרישות</Label>
            <Input type="text" value={demands} onChange={e => setDemands(e.target.value)}/>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <Button onClick={() => onSubmit()} disabled={!(program && internshipName && internshipDescription && demands)}>צור התמחות</Button>
        </Container>
    )
}
export default CreateInternshipCom;