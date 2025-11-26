import React from "react";
import { Outlet } from "react-router-dom";
const Root = ()=>{
    return(
        <div>
            <header>My Header</header>
            <Outlet/>
        </div>
    )
}
export default Root