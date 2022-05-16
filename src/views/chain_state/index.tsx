import React, { ReactNode,useEffect } from "react";
import { Outlet, useLocation, useNavigate } from 'react-router-dom';


const ChainStateView = ():React.ReactElement<ReactNode> => {
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

export default ChainStateView;
