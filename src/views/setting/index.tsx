import React,{ ReactNode } from "react";
import { Outlet } from "react-router-dom";

const GneralView = () : React.ReactElement<ReactNode> => {
    return (
        <Outlet />
    )
};
export default GneralView;