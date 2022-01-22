import React from "react";
import styled from "styled-components";
import Select from "react-select";

// const BaseDropdown = styled(Select)`
//   width: 300px;
// `;

const BaseDropDown = styled(Select)`
  width: 300px;
`

const DropDown = ({ options, placeholder, onChange, isDisabled, value}) => {

    return (
        <BaseDropDown
            options={options}
            placeholder={placeholder}
            onChange={onChange}
            isDisabled={isDisabled}
            value={value}
        />
    )

}

export default DropDown;