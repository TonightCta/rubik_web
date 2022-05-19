import React, { ReactNode } from "react";
import "./index.scss";
const Forks = (): React.ReactElement<ReactNode> => {

  return (
    <div className="forks-boxes">
      <div className="forks-box">
        <header>
          <div className="forks-box">
            <p className="forks-box-header">blocks</p>
            <p className="forks-box-content">54</p>
          </div>
          <div className="forks-box">
            <p className="forks-box-header">forks</p>
            <p className="forks-box-content">2</p>
          </div>
        </header>
        <div className="forks"></div>
      </div>
    </div>
  );
};
export default Forks;
