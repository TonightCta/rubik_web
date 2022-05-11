import React, { ReactNode,useEffect } from "react";
import { Outlet, useLocation, useNavigate } from 'react-router-dom';


const ExplorerView = ():React.ReactElement<ReactNode> => {
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/explorer/chain-info')
  },[])
  return (
      <div>
        <Outlet></Outlet>
      </div>
  )
};

export default ExplorerView;
