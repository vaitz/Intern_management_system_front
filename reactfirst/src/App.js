
import React, {useState} from "react";
import SidePanel from "./components/side_panel";

const App = () => {

    const  [page,setPage] = useState("home");
    const  [userType,setUserType] = useState("guest");

    return (
        <div>
            <SidePanel user={userType} setPage={setPage}/>
            {page === ""}
        </div>
    )

}
    export default App;

