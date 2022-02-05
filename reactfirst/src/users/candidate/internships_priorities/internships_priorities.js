import React, {useEffect, useState} from 'react';
import {getInternships, getPrioritiesAmount, sendInternshipsToServer} from "./requests";

const program = "program1"

const InternshipsPriorities = () => {
    const [options, setOptions] = useState([]);
    const [prioritiesAmount, setPrioritiesAmount] = useState([]);

    useEffect( () => {
        getInternships(program, setOptions).then(r => console.log(r));
        getPrioritiesAmount(program, setPrioritiesAmount).then(r => console.log(r));
   }, [])


// const onclick = (option) => {

// }
    return (
        <div>
            <ul>
                {
                    options.map((option, index)=>(
                        <li key={index}>{option.companyName} - {option.internshipName}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default InternshipsPriorities;

