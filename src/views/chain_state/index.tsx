import React, { ReactNode, useEffect } from "react";
import { Outlet, useNavigate } from 'react-router-dom';


const ChainStateView = (): React.ReactElement<ReactNode> => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/chain-state/chain-storage')
  }, [])
  return (
    <div style={{padding:'30px 40px'}}>
      <Outlet></Outlet>
    </div>
  )
};

export default ChainStateView;
