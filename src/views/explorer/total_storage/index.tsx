import React, { ReactNode } from "react";
import PolkadotConfig from "../../../utils/api";
import { selectEventsList } from "../../../store/eventsList";
import { useSelector } from "react-redux";
const TotalStorage = (): React.ReactElement<ReactNode> => {
    const { getEvents } = PolkadotConfig;
    const eventsList = useSelector(selectEventsList);
  const getws = async () => {
    await getEvents();
    console.log(eventsList);
    
  };
  return (
    <div>
      <button onClick={() => getws()}>获取ws数据</button>
    </div>
  );
};
export default TotalStorage;
