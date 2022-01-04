
import React, {useState} from "react";
import SidePanel from "./components/side_panel";
import CreateInternship from "./components/create_internship/create_internship";
import styled from "styled-components";
import {Route, HashRouter, Switch} from "react-router-dom";
import Register from "./components/register/register";


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
        <HashRouter>
            <Container>
                <SidePanel user={userType} setPage={setPage}/>
                <ContentWrapper>
                    <Switch>
                        <Route path="/register" component={Register}/>
                        <Route exact path="/" component={CreateInternship}/>
                    </Switch>
                </ContentWrapper>
            </Container>
        </HashRouter>
    )

}
    export default App;

