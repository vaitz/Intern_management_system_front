import React, {useState} from "react";
import styled from "styled-components";
import Select from 'react-select';

const Label =  styled.text`
  font-size: 18px;
  color: #666666;
  margin-top: 20px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
`

const Input = styled.input`
  width:  500px;
  height: 20px;
`

const Dropdown = styled(Select)`
  width: 300px;
`

const Button = styled.button`
  width: 100px;
  height: 30px;
  margin: 150px 300px 200px;
  background: #7A5CFA;
  color: #FFFFFF
`

const customStyles = {
    option: (provided, state) => ({
        color: "black"
    })
}

const CreateInternship = () => {
    const [options, setOptions] = useState([{value: 1, label: "מאי וייץ"}, { value: 2, label: "חי מתתיהו" }]);
    const [chosenManager, setChosenManager] = useState();
    const [internshipName, setInternshipName] = useState("");
    const [internshipDemands, setInternshipDemands] = useState("");
    const [division, setDivision] = useState("");

    // const onSubmit => {
    //
    // }

    return (
        <Container>
            <Label>שם התמחות</Label>
            <Input type="text" value={internshipName} onChange={e => setInternshipName(e.target.value)}/>
            <Label>מחלקה</Label>
            <Input type="text" value={division} onChange={e => setDivision(e.target.value)}/>
            <Label>דרישות התמחות</Label>
            <Input type="text" value={internshipDemands} onChange={e => setInternshipDemands(e.target.value)}/>
            <Label>מנהל התמחות</Label>
            <Dropdown styles={customStyles} onChange={setChosenManager} options={options} placeholder={"בחר מנהל"}/>
            <Button>צור התמחות</Button>
        </Container>
)
}
export default CreateInternship;