import React, {useState} from "react";
import styled from "styled-components";
import {createInternship} from "./requests";
import PopUp from "../../../components/popup";


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
    const [company, setCompany] = useState("");
    const [internshipName, setInternshipName] = useState("");
    const [internshipDescription, setInternshipDescription] = useState("");
    const [demands, setDemands] = useState("");
    const [popup, setPopup] = useState(false);

    const onSubmit = () => {
        createInternship(company,internshipName,internshipDescription,demands)
        setPopup(true);
    }

    return (
        <Container>
            { popup && <PopUp trigger={popup} setTrigger={() => setPopup(false)}>
                {`נוצרה ההתמחות:  "${internshipName}"  `}
            </PopUp>}
            <Label>שם חברה</Label>
            <Input type="text" value={company} onChange={e => setCompany(e.target.value)}/>
            <Label>שם ההתמחות</Label>
            <Input type="text" value={internshipName} onChange={e => setInternshipName(e.target.value)}/>
            <Label>תיאור ההתמחות</Label>
            <Input type="text" value={internshipDescription} onChange={(e) => setInternshipDescription(e.target.value)}/>
            <Label>דרישות</Label>
            <Input type="text" value={demands} onChange={e => setDemands(e.target.value)}/>
            <Button onClick={() => onSubmit()} disabled={!(company && internshipName && internshipDescription && demands)}>צור התמחות</Button>
        </Container>
    )
}
export default CreateInternship;