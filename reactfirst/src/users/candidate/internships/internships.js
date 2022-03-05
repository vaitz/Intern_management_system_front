import React, {useEffect, useState} from 'react';
import {getInternships} from "./requests";
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

const Internships = () => {
    const [internships, setInternships] = useState([]);
    const [showInternships, setShowInternships] = useState([]);

    useEffect(() => {
        getInternships(program, setInternships);
    }, [])


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


    return (
        <div>
            <div>
                <h1>התמחויות</h1>
                {showInternships}
            </div>
        </div>
    );
};

export default Internships;

