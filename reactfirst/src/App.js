
import React, {useState} from "react";
import Register from "./components/register";
import SidePanel from "./components/side_panel";
import CreateInternship from "./components/create_internship";
import styled from "styled-components";

const Container = styled.div`
  background: #F7F8FC;
  display: flex;
  flex-direction: row;
`

const ContentWrapper = styled.div`
  align-items: center;
  padding: 30px 50px;
`

const App = () => {

    const  [page,setPage] = useState("home");
    const  [userType,setUserType] = useState("guest");

    return (
        <Container>
            <SidePanel user={userType} setPage={setPage}/>
            <ContentWrapper>
                <CreateInternship/>
            </ContentWrapper>
        </Container>
    )

}
    export default App;

