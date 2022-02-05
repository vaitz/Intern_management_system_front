import React, {useEffect, useState} from 'react';
import {getInternships, getPrioritiesAmount, sendInternshipsToServer} from "./requests";
import Dropdown from "../../../components/dropdown";
import Button from "../../../components/button";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin: 150px 400px 200px;
`
const program = "program1"
const username = "may"
// todo: get the program and the username from the cookie

const InternshipsPriorities = () => {
    const [options, setOptions] = useState([]);
    const [prioritiesAmount, setPrioritiesAmount] = useState(1);
    const [selected, setSelected] = useState([]);
    const drops = []

    useEffect(() => {
        getPrioritiesAmount(program, setPrioritiesAmount);
        getInternships(program, setOptions);
    }, [])

    const createDropDown = () => {
        for (var i=1; i <= prioritiesAmount; i++) {
            drops.push(<p key={i}> עדיפות {i}-</p>);
            drops.push(<Dropdown options={options} onChange={handleChange} placeholder={"בחר התמחות"} width='200px' height="100px"/>);
        }
        return drops;
    }

    const handleChange = (chosenOption) => {
        // pop from options
        setOptions(options.filter((option)=> {return option !== chosenOption}));
        // add to selected
        setSelected([...selected, chosenOption]);

        // todo: remove the last value from selected

        // todo: add to options

        // todo: make sure the selected in order of priorities

    }

    const handleClick = () => {
        sendInternshipsToServer(username, selected);
        console.log(username);
        console.log(selected);
    }

    return (
        <div>
            <p>נא לבחור את ההתמחויות לפי סדר עדיפות</p>
            {createDropDown()}
            <ButtonWrapper>
                <Button value={"שלח עדיפויות"} onClick={handleClick}/>
            </ButtonWrapper>
        </div>
    );
};

export default InternshipsPriorities;

