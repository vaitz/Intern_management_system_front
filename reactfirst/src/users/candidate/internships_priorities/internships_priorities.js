import React, {useEffect, useState} from 'react';
import {getInternships, sendInternshipsToServer} from "./requests";
import Button from "../../../components/button";
import styled from "styled-components";
import Select from "react-select";
import PopUp from "../../../components/popup";
import {useHistory} from "react-router-dom";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px;
`
const Dropdown = styled(Select)`
  width: 300px;
`

const InternshipsPriorities = ({username, program}) => {
    const [error, setError] = useState(null);
    const [options, setOptions] = useState([]);
    const [select1, setSelect1] = useState({});
    const [select2, setSelect2] = useState({});
    const [select3, setSelect3] = useState({});
    const [popup, setPopup] = useState(false);
    let history = useHistory();

    const handleChange1 = (selected) => {
        console.log(selected);
        setSelect1(selected);
    }

    const handleChange2 = (selected) => {
        console.log(selected);
        setSelect2(selected);
    }

    const handleChange3 = (selected) => {
        console.log(selected);
        setSelect3(selected);
    }

    useEffect(() => {
        getInternships(program, setOptions);
    }, [])

    const handleClick = () => {
        setError(null);
        const selected = [select1, select2, select3];
        const unique = selected.filter((q, idx) => selected.indexOf(q) === idx);

        if(selected.length !== unique.length){
            setError(`אי אפשר לבחור התמחות כמה פעמים, נא לבחור התמחויות שונות`);
        }else{
            const selectedObj = selected.map(obj=>({
                companyName: obj.object.companyName,
                internshipName: obj.object.internshipName
            }));
            console.log(selectedObj);
            sendInternshipsToServer(username, selectedObj);
            setPopup(true);
        }
    }

    return (
        <div>
            <div>
                { popup && <PopUp trigger={popup} setTrigger={() => history.push("/njsw36/")}>
                    {'בחירת התמחויות לפי סדר עדיפויות בוצע בהצלחה!'}
                </PopUp>}
                <h1>בחירת עדיפויות</h1>
                <h3>נא לבחור את ההתמחויות לפי סדר עדיפות (יש חשיבות לסדר בחירה)</h3>

                <h4> עדיפות 1-</h4>
                <Dropdown options={options} value={select1} onChange={handleChange1} placeholder={"בחר התמחות"} width='200px' height="100px"/>

                <h4> עדיפות 2-</h4>
                <Dropdown options={options} value={select2} onChange={handleChange2} placeholder={"בחר התמחות"} width='200px' height="100px"/>

                <h4> עדיפות 3-</h4>
                <Dropdown options={options} value={select3} onChange={handleChange3} placeholder={"בחר התמחות"} width='200px' height="100px"/>

                <div>
                    {error && <><small style={{ color: 'red' }}>{error}</small></>}
                    <ButtonWrapper>
                        <Button value={"שלח עדיפויות"} onClick={handleClick}/>
                    </ButtonWrapper>
                </div>
            </div>
        </div>
    );
};

export default InternshipsPriorities;

