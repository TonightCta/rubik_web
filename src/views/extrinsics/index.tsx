import React, { ReactNode,useEffect } from "react";
import { Outlet, useLocation, useNavigate } from 'react-router-dom';


const ExtrinsicsView = ():React.ReactElement<ReactNode> => {
  const navigate = useNavigate()
  useEffect(()=>{
    console.log(123123);
    
    navigate('/extrinsics/submission')
  },[])
  return (
      <div>
        <Outlet></Outlet>
      </div>
  )
};

export default ExtrinsicsView;
