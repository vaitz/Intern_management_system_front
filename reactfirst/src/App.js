
import React, {useState} from "react";
import Register from "./components/register";
import SidePanel from "./components/side_panel";

const App = () => {

    const  [page,setPage] = useState("home");
    const  [userType,setUserType] = useState("guest");

    return (
        <div>
            <SidePanel user={userType} setPage={setPage}/>
            {page === ""}
            <Register/>
        </div>
    )

}
    export default App;

