
import React, {useEffect, useState} from "react";
import SidePanel from "./components/side_panel/side_panel";
import CreateProgram from "./components/create_program/create_program";
import styled from "styled-components";
import {Route, HashRouter, Switch, useHistory, BrowserRouter} from "react-router-dom";
import Register from "./components/register/register";
import Login from "./components/login/login";
import PublicRoute from "./components/utils/public_route";
import Home from "./components/home/home";
import CreateInternship from "./components/create_intership/create_internship";
import ReportHours from "./components/report_hours/report_hours";


const Container = styled.div`
  background: #F7F8FC;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  min-height: 1160px;
`

const ContentWrapper = styled.div`
  padding: 30px 50px;
  width: auto;
`

const App = () => {

    const [userType, setUserType] = useState("guest");

    return (
        <BrowserRouter>
            <Container>
                <SidePanel userType={userType}/>
                <ContentWrapper>
                    <Switch>
                        <Route path="/createProgram" component={CreateProgram}/>
                        <Route path="/reportHours" component={ReportHours}/>
                        <Route path="/createInternship" component={CreateInternship}/>
                        <Route path="/register" component={Register}/>
                        <PublicRoute path="/login" component={Login} />
                        <Route path="/" component={Home}/>
                    </Switch>
                </ContentWrapper>
            </Container>
        </BrowserRouter>
    )

}
    export default App;


