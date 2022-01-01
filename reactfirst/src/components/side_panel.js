import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {userOptions} from "../config";

const Container = styled.div`
  background: #363740;
  padding-left: 250px;
`

const SidePanel = ({user, setPage}) => {

    const [options, setOptions] = useState([]);

    useEffect(() => {
        setOptions(userOptions[user]);
    }, [])

    return (
        <Container>
            {options && options.map(option => <div>{option}</div>)}
        </Container>
    );
};

export default SidePanel;