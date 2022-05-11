import React, { ReactNode,useEffect } from "react";
import { Outlet, useLocation, useNavigate } from 'react-router-dom';


const ChainStateView = ():React.ReactElement<ReactNode> => {
  const navigate = useNavigate()
  useEffect(()=>{
    // navigate('/chain-state/chain-storage')
  },[])
  return (
      <div>
        <Outlet></Outlet>
      </div>
  )
};

export default ChainStateView;
