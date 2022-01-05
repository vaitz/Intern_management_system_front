
import React, {useState} from "react";
import SidePanel from "./components/side_panel/side_panel";
import CreateInternship from "./components/create_internship/create_internship";
import styled from "styled-components";
import {Route, HashRouter, Switch} from "react-router-dom";
import Register from "./components/register/register";
import Login from "./components/login/login";
import PublicRoute from "./components/utils/public_route";
import Home from "./components/home/home";


const Container = styled.div`
  background: #F7F8FC;
  display: flex;
  flex-direction: row;
  font-family: Arial, Helvetica, sans-serif;
  min-height: 1160px;
`

const ContentWrapper = styled.div`
  align-items: center;
  padding: 30px 50px;
`

const App = () => {

    return (
        <HashRouter>
            <Container>
                <SidePanel />
                <ContentWrapper>
                    <Switch>
                        <Route path="/register" component={Register}/>
                        <Route path="/createInternship" component={CreateInternship}/>
                        <PublicRoute path="/login" component={Login} />
                        <Route path="/" component={Home}/>
                    </Switch>
                </ContentWrapper>
            </Container>
        </HashRouter>
    )

}
    export default App;

