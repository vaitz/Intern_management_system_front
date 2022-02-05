
import React, { useState} from "react";
import SidePanel from "./components/side_panel/side_panel";
import CreateProgram from "./components/create_program/create_program";
import InternshipsPriorities from "./components/internships_priorities/internships_priorities";
import styled from "styled-components";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Register from "./components/register/register";
import Login from "./components/login/login";
import PublicRoute from "./components/utils/public_route";
import Home from "./components/home/home";
import CreateInternship from "./components/create_intership/create_internship";
import ReportHours from "./components/report_hours/report_hours";
import {Table} from "./components/assign_internships/assign_internships";


const Container = styled.div`
  background: #F7F8FC;
  display: flex;
  font-family: rubik;
  min-height: 1160px;
`

const ContentWrapper = styled.div`
  padding: 30px 50px;
  width: auto;
`

const App = () => {

    const [userType, setUserType] = useState("internshipManager");

    return (
        <BrowserRouter>
            <Container>
                <SidePanel userType={userType}/>
                <ContentWrapper>
                    <Switch>
                        <Route path="/createProgram" component={CreateProgram}/>
                        <Route path="/assignInternships" component={Table}/>
                        <Route path="/reportHours" component={ReportHours}/>
                        <Route path="/createInternship" component={CreateInternship}/>
                        <Route path="/internshipsPriorities" component={InternshipsPriorities}/>
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


