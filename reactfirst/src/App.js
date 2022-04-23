
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
import CreateInternship from "./users/program_manager/create_intership/create_internship";
import CreateInternshipCom from "./users/company_representive/create_intership/create_internship";
import ReportHours from "./users/intern/report_hours/report_hours";
import {AssignInternships} from "./users/program_manager/assign_internships/assign_internships";
import {GUEST} from "./constants";
import Students from "./users/program_manager/students/students";
import PublicRoute from "./utils/public_route";
import {getUser} from "./utils/common";
import {getDetails} from "./requests";
import MentorStudents from "./users/mentor/interns/students";
import ChangePass from "./users/common/changePass/changePass";
import {ForgetPass, ForgetPassEmail} from "./users/guest/login/forget_password";
import ApproveHours from "./users/mentor/approve_hours/approve_hours";
import Programs from "./users/system_manager/programs/programs";
import ApproveCandidate from "./users/common/approve_candidate/approve_candidate";
import UploadReport from "./users/intern/upload_report/upload_report";
import ApproveMentorCandidates from "./users/mentor/approve_candidates";
import ApproveCompanyRepCandidates from "./users/company_representive/approve_candidates";


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
    const [programId, setProgramId] = useState("");
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
                        <Route path="/njsw36/uploadReport">
                            <UploadReport username={username}/>
                        </Route>
                        <Route path="/njsw36/approveMentorCandidates">
                            <ApproveMentorCandidates username={username}/>
                        </Route>
                        <Route path="/njsw36/approveCompanyRepCandidates">
                            <ApproveCompanyRepCandidates username={username}/>
                        </Route>
                        <Route path="/njsw36/programs">
                            <Programs />
                        </Route>
                        <Route path="/njsw36/mentor/approveHours">
                            <ApproveHours username={username} />
                        </Route>
                        <Route path="/njsw36/createProgram" component={CreateProgram}/>
                        <Route path="/njsw36/mentor/interns">
                            <MentorStudents username={username} />
                        </Route>
                        <Route path="/njsw36/students">
                            <Students programId={programId}/>
                        </Route>
                        <Route path="/njsw36/assignInternships">
                            <AssignInternships programId={programId} />
                        </Route>
                        <Route path="/njsw36/reportHours">
                            <ReportHours username={username} />
                        </Route>
                        <Route path="/njsw36/createInternship/company">
                            <CreateInternshipCom username={username} />
                        </Route>
                        <Route path="/njsw36/createInternship/manager" component={CreateInternship}/>
                        <Route path="/njsw36/internshipsPriorities">
                            <InternshipsPriorities program={programId} username={username}/>
                        </Route>
                        <Route path="/njsw36/internships">
                            <Internships program={programId}/>
                        </Route>
                        <Route path="/njsw36/register" component={Register}/>
                        <Route path="/njsw36/forgetPass" component={ForgetPass}/>
                        <Route path="/njsw36/forgetPassEmail" component={ForgetPassEmail}/>
                        <Route path="/njsw36/changePass">
                            <ChangePass username={username}/>
                        </Route>
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


