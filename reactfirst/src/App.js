
import React, {useEffect, useState} from "react";
import SidePanel from "./components/side_panel/side_panel";
import CreateInternship from "./components/create_internship/create_internship";
import styled from "styled-components";
import {Route, HashRouter, Switch} from "react-router-dom";
import Register from "./components/register/register";
import Login from "./components/login/login";
import PublicRoute from "./components/utils/public_route";
import Home from "./components/home/home";
import {getToken, removeUserSession, setUserSession} from "./components/utils/common";
import axios from "axios";



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

    const [authLoading, setAuthLoading] = useState(true);
    useEffect(() => {
        const token = getToken();
        if (!token) {
            return;
        }

    axios.get(`http://localhost:3000/verifyToken?token=${token}`).then(response => {
        setUserSession(response.data.token, response.data.user);
        setAuthLoading(false);
    }).catch(error => {
        removeUserSession();
        setAuthLoading(false);
    });
}, []);

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


