
import React, {useEffect, useState} from "react";
import InternshipsPriorities from "./users/candidate/internships_priorities/internships_priorities";
import Internships from "./users/candidate/internships/internships";
import SidePanel from "./users/common/side_panel/side_panel";
import CreateProgram from "./users/system_manager/create_program/create_program";
import styled from "styled-components";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Register from "./users/guest/register/register";
import Login from "./users/guest/login/login";
import Home from "./users/common/home/home";
import CreateInternship from "./users/internship_manager/create_intership/create_internship";
import CreateInternshipCom from "./users/company_representive/create_intership/create_internship";
import ReportHours from "./users/intern/report_hours/report_hours";
import {AssignInternships} from "./users/internship_manager/assign_internships/assign_internships";
import {GUEST} from "./constants";
import Students from "./users/internship_manager/students/students";
import PublicRoute from "./utils/public_route";
import {getUser} from "./utils/common";
import {getDetails} from "./requests";
import MentorStudents from "./users/mentor/students";


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
    const [programId, setProgramId] = useState();
    const [username, setUsername] = useState();

    useEffect(() => {
        const user = getUser();
        if (user) {
            setUsername(user);
            getDetails(user,setUserType,setFirstName,setProgramId);
        }
    }, []);

    return (
        <BrowserRouter>
            <Container>
                <SidePanel userType={userType} firstName={firstName} setUserType={setUserType} setFirstName={setFirstName}/>
                <ContentWrapper>
                    <Switch>
                        <Route path="/njsw36/createProgram" component={CreateProgram}/>
                        <Route path="/mentor/students" component={MentorStudents}/>
                        <Route path="/students">
                            <Students programId={programId}/>
                        </Route>
                        <Route path="/njsw36/assignInternships" component={AssignInternships}/>
                        <Route path="/njsw36/reportHours" component={ReportHours}/>
                        <Route path="/njsw36/createInternship/company" component={CreateInternshipCom}/>
                        <Route path="/njsw36/createInternship/manager" component={CreateInternship}/>
                        <Route path="/njsw36/internshipsPriorities">
                            <InternshipsPriorities program={programId} username={username}/>
                        </Route>
                        <Route path="/njsw36/internships" component={Internships}/>
                        <Route path="/njsw36/register" component={Register}/>
                        <Route path="/njsw36/login">
                            <Login setUserType={setUserType} setProgramId={setProgramId} setFirstName={setFirstName} setUsername={setUsername}/>
                        </Route>
                        <PublicRoute path="/njsw36/" component={Home}/>
                    </Switch>
                </ContentWrapper>
            </Container>
        </BrowserRouter>
    )

}
export default App;


