import React from 'react';
import styled from "styled-components";


const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.2);

  display: flex;
  justify-content: center;
  align-items: center;
`
const ContentWrapper = styled.div`
  position: relative;
  padding: 32px;
  width: 100%;
  max-width: 640px;
  background-color: #FFF;
`

const Button = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;
`

const PopUp = (props) => {
    return (props.trigger) ? (
        <Container>
            <ContentWrapper>
                <Button onClick={props.setTrigger}>X</Button>
                {props.children}
            </ContentWrapper>
        </Container>
    ) : "";
};

export default PopUp;