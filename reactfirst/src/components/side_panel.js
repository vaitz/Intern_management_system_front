import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {userOptions} from "../config";

const SidePanel = ({user, setPage}) => {

    const [options, setOptions] = useState([]);

    useEffect(() => {
        setOptions(userOptions[user]);
    }, [])

    return (
        <div>
            {options && options.map(option => <div>{option}</div>)}
            {user}
        </div>
    );
};

export default SidePanel;