import React from "react";
import PointTitle from "../../../../../components/point_title/index";
import './index.scss'
const SystemEvents: React.FC = (): React.ReactElement<React.ReactNode> => {
  return (
    <div className="system-events">
      <PointTitle text="system events" />
      <div className="system-events-content">No events available</div>
    </div>
  );
};
export default SystemEvents
