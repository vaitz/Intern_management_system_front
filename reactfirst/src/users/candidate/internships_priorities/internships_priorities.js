import React, {useEffect, useState} from 'react';
import {getInternships, getPrioritiesAmount, sendInternshipsToServer} from "./requests";
import Dropdown from "../../../components/dropdown";
import Button from "../../../components/button";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px;
`
const program = "program1"
const username = "may"
// todo: get the program and the username from the cookie

const InternshipsPriorities = () => {
    const [options, setOptions] = useState([]);
    const [prioritiesAmount, setPrioritiesAmount] = useState(1);
    const [selected, setSelected] = useState([]);
    const [drops, setDrops] = useState([]);

    useEffect(() => {
        getPrioritiesAmount(program, setPrioritiesAmount);
        getInternships(program, setOptions);
    }, [])

    useEffect(()=>{
        var tempDrops = [];
        for (var i=1; i <= prioritiesAmount; i++) {
            tempDrops.push(<h4 key={i}> עדיפות {i}-</h4>);
            tempDrops.push(<Dropdown options={options} onChange={handleChange} placeholder={"בחר התמחות"} width='200px' height="100px"/>);
        }
        setDrops(tempDrops);
    }, [options])


    const handleChange = (chosenOption) => {
        console.log(chosenOption);
        // pop from options
        setOptions(options.filter((option)=> {return option !== chosenOption}));

    }

    console.log(selected);

    const handleClick = () => {
        sendInternshipsToServer(username, selected);
        console.log(username);
        console.log(selected);
    }

    return (
        <div>
            <div>
                <h1>בחירת עדיפויות</h1>
                <h3>נא לבחור את ההתמחויות לפי סדר עדיפות (יש חשיבות לסדר בחירה)</h3>
                {drops}
                <ButtonWrapper>
                    <Button value={"שלח עדיפויות"} onClick={handleClick}/>
                </ButtonWrapper>
            </div>
        </div>
    );
};

export default InternshipsPriorities;

