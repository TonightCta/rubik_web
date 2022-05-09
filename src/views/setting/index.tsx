import React,{ ReactNode } from "react";
import { Outlet } from "react-router-dom";

const SettingView = () : React.ReactElement<ReactNode> => {
    return (
        <Outlet />
    )
};
export default SettingView;