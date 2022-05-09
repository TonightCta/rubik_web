import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";

const TestView = (): React.ReactElement<ReactNode> => {
    return (
        <div>
            {/* <p style={{color:'black'}}> Test </p> */}
            <Outlet/>
        </div>
    )
};

export default TestView;