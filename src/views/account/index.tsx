import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";

const AccountView = () : React.ReactElement<ReactNode> => {
    return (
        <div>
            <Outlet/>
        </div>
    )
};

export default AccountView;