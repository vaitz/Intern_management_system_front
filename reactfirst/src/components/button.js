import React from "react";
import styled from "styled-components";

const BaseButton = styled.button`
  width: 200px;
  height: 50px;
  background: #7A5CFA;
  color: #FFFFFF
`;

const Button = ({onClick, value}) => {
    return <BaseButton onClick={onClick}>
        {value}
    </BaseButton>
}

export default Button;