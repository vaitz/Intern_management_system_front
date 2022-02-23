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
    const [internships, setInternships] = useState([]);
    const [prioritiesAmount, setPrioritiesAmount] = useState(1);
    const [selected, setSelected] = useState([]);
    const [showInternships, setShowInternships] = useState([]);
    const [drops, setDrops] = useState([]);

    useEffect(() => {
        getPrioritiesAmount(program, setPrioritiesAmount);
        getInternships(program, setOptions, setInternships);
    }, [])

    useEffect(()=>{
        var tempDrops = [];
        for (var i=1; i <= prioritiesAmount; i++) {
            tempDrops.push(<h4 key={i}> עדיפות {i}-</h4>);
            tempDrops.push(<Dropdown options={options} onMenuOpen={handleMenuOpen} onChange={handleChange} placeholder={"בחר התמחות"} width='200px' height="100px"/>);
        }
        setDrops(tempDrops);
    }, [options])

    useEffect(()=>{
        setShowInternships(internships.map(internship => (
            <div>
                <h2>
                    {internship.companyName}- {internship.internshipName}
                </h2>
                <p>
                    {internship.about}
                </p>
                <p>
                    <h4>דרישות: </h4>
                    {internship.requirements}
                </p>
            </div>
        )))
    }, [internships])


    const handleChange = (chosenOption) => {
        console.log(chosenOption);
        // pop from options
        setOptions(options.filter((option)=> {return option !== chosenOption}));

    }

    const handleMenuOpen = (oldValue) => {
                
        // console.log(oldValue);
        // todo: remove the last value from selected

        // todo: add to options

        // todo: make sure the selected in order of priorities
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
                <h1>התמחויות</h1>
                {showInternships}
            </div>
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

