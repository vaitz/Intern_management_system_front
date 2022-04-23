import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Select from "react-select";

const BaseDropDown = styled(Select)`
  width: 300px;
`

const DropDown = ({ options, placeholder, onChange, isDisabled, value}) => {
    const [currentOptions, setCurrentOptions] = useState();
    useEffect(() => {
        setCurrentOptions(options.map((option, index) => ({value: index, label: option})
    ))
    }, [options])
    return (
        <BaseDropDown
            options={currentOptions}
            placeholder={placeholder}
            onChange={onChange}
            isDisabled={isDisabled}
            value={value}
        />
    )
}

export default DropDown;