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
    const [companyName, setCompanyName] = useState("");
    const [internshipName, setInternshipName] = useState("");
    const [internshipDescription, setInternshipDescription] = useState("");
    const [demands, setDemands] = useState("");
    const [mentor, setMentor] = useState("");
    const [notes, setNotes] = useState("");
    const [popup, setPopup] = useState(false);

    const onSubmit = () => {
        createInternship(companyName,internshipName,internshipDescription,demands,mentor,notes)
        setPopup(true);
    }

    return (
        <Container>
            { popup && <PopUp trigger={popup} setTrigger={() => setPopup(false)}>
                {`נוצרה ההתמחות:  "${internshipName}"  `}
            </PopUp>}
            <Label>שם החברה</Label>
            <Input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)}/>
            <Label>שם ההתמחות</Label>
            <Input type="text" value={internshipName} onChange={e => setInternshipName(e.target.value)}/>
            <Label>תיאור ההתמחות</Label>
            <Input type="text" value={internshipDescription} onChange={(e) => setInternshipDescription(e.target.value)}/>
            <Label>דרישות</Label>
            <Input type="text" value={demands} onChange={e => setDemands(e.target.value)}/>
            <Label>פרטי המנטור</Label>
            <Input type="text" value={mentor} onChange={e => setMentor(e.target.value)}/>
            <Label>הערות</Label>
            <Input type="text" value={notes} onChange={e => setNotes(e.target.value)}/>
            <Button onClick={() => onSubmit()} disabled={!(companyName && internshipName && internshipDescription && demands && mentor)}>צור התמחות</Button>
        </Container>
    )
}
export default CreateInternship;