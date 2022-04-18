import React from "react";
import styled from "styled-components";

const BaseButton = styled.button`
  width: 200px;
  height: 50px;
  background: #7A5CFA;
  color: #FFFFFF
`;

const Button = ({onClick, value, disabled}) => {
    return <BaseButton onClick={onClick} disabled={disabled}>
        {value}
    </BaseButton>
}

export default Button;