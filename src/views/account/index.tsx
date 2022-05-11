import React, { ReactNode, useEffect } from "react";
import { Outlet, useNavigate } from 'react-router-dom';

const AccountView = () : React.ReactElement<ReactNode> => {
    const navigate = useNavigate()
    useEffect(()=>{
      
    },[])
    return (
        <div>
            <Outlet/>
        </div>
    )
};

export default AccountView;