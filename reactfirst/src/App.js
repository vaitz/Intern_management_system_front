
import React, { useState} from "react";
import InternshipsPriorities from "./users/candidate/internships_priorities/internships_priorities";
import Internships from "./users/candidate/internships/internships";
import SidePanel from "./users/common/side_panel/side_panel";
import CreateProgram from "./users/system_manager/create_program/create_program";
import styled from "styled-components";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Register from "./users/guest/register/register";
import Login from "./users/guest/login/login";
import Home from "./users/common/home/home";
import CreateInternship from "./users/common/create_intership/create_internship";
import ReportHours from "./users/intern/report_hours/report_hours";
import {AssignInternships} from "./users/internship_manager/assign_internships/assign_internships";
import {GUEST, PROGRAM_MANAGER} from "./constants";
import Students from "./users/internship_manager/students/students";


const Container = styled.div`
  background: #F7F8FC;
  display: flex;
  min-height: 1160px;
`

const ContentWrapper = styled.div`
  padding: 30px 50px;
  width: auto;
`

const App = () => {

    const [userType, setUserType] = useState(GUEST);
    const [firstName, setFirstName] = useState("אורח");

    return (
        <BrowserRouter>
            <Container>
                <SidePanel userType={userType} firstName={firstName} setUserType={setUserType} setFirstName={setFirstName}/>
                <ContentWrapper>
                    <Switch>
                        <Route path="/createProgram" component={CreateProgram}/>
                        <Route path="/students" component={Students}/>
                        <Route path="/assignInternships" component={AssignInternships}/>
                        <Route path="/reportHours" component={ReportHours}/>
                        <Route path="/createInternship" component={CreateInternship}/>
                        <Route path="/internshipsPriorities" component={InternshipsPriorities}/>
                        <Route path="/internships" component={Internships}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/login">
                            <Login setUserType={setUserType} setFirstName={setFirstName}/>
                        </Route>
                        <Route path="/" component={Home}/>
                    </Switch>
                </ContentWrapper>
            </Container>
        </BrowserRouter>
    )

}
export default App;


