import React, { ReactNode,useEffect } from "react";
import { Outlet, useLocation, useNavigate } from 'react-router-dom';


const StakingView = ():React.ReactElement<ReactNode> => {
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/staking/overview')
  },[])
  return (
      <div>
        <Outlet></Outlet>
      </div>
  )
};

export default StakingView;
