import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './side_bar_data';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { GUEST } from "../../../constants";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {FaSignOutAlt} from 'react-icons/fa';
import {removeUserSession} from "../../../utils/common";
import {logoutRequest} from "./requests";

const Div = styled.div`
    margin-right: 20px;
`

const Name = styled.div`
  color: #A4A6B3;
  font-size: 20px;
  margin-bottom: 20px;
`

function SidePanel({userType, firstName, setUserType, setFirstName}) {
    const [sidebar, setSidebar] = useState(false);
    let history = useHistory();

    const showSidebar = () => setSidebar(!sidebar);

    const onLogout = () => {
        setUserType(GUEST);
        setFirstName("אורח");
        removeUserSession();
        logoutRequest();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <Name>
                            { "שלום " + firstName }
                        </Name>
                        {SidebarData[userType].map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <Div/>
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                        {userType !== GUEST && 
                            <li key="disconnect" className='nav-text'>
                                <Link to="/njsw36/" onClick={onLogout}>
                                    <FaSignOutAlt/>
                                    <Div/>
                                    התנתקות
                                </Link>
                            </li>
                        }
                    </ul>
                    
                </nav>
                
            </IconContext.Provider>
        </>
    );
}

export default SidePanel;