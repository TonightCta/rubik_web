import React,{useEffect, useState} from "react";
import ChainInfoPageHeader from "./components/Header";
import "./index.scss";

import ChainInfoPageTable from "./components/table/index";
import PolkadotConfig from "../../../utils/api";
import { HeaderExtendedWithMapping } from "../../../typing/apiType";
import { useSelector,useDispatch } from "react-redux";
import { selectChainInfoList,initChainInfoList} from "../../../store/chain_info_list_Slice";
import { selectApiStatus } from "../../../store/api_status";

const ChainInfo: React.FC = (): React.ReactElement<React.ReactNode> => {
  const [infoIndex, setInfoIndex] = React.useState(0);
  const { getChainInfoList } = PolkadotConfig;
  let chainInfoList = useSelector(selectChainInfoList)
  let apiStatus = useSelector(selectApiStatus)
  const dispatch = useDispatch()
  useEffect(()=>{
      return ()=>{dispatch(initChainInfoList([]))}
  },[])
  useEffect(()=>{
      console.log(123);
      
    if(apiStatus == true){
        wsClick()
    }
  },[apiStatus])
  const wsClick = async () => {
    await getChainInfoList();
    // setBlockDetaisList(wsVlaue?.lastHeaders as unknown as HeaderExtendedWithMapping[])
  }; 
  return (
    <div className="chain-info-page">
      <button onClick={wsClick}>获取ws数据</button>
      <ChainInfoPageHeader />
      <div className="chain-info-page-table-back">
        <div className="chain-info-page-table-box">
          <div className="chain-info-page-switch">
            <div
              className={`${
                infoIndex == 0 ? "switch-choose" : "switch-unchoose"
              }`}
              onClick={() => setInfoIndex(0)}
            >
              recent blocks
            </div>
            <div
              className={`${
                infoIndex == 1 ? "switch-choose" : "switch-unchoose"
              }`}
              onClick={() => setInfoIndex(1)}
            >
              recent events
            </div>
          </div>
          {infoIndex == 0 && chainInfoList && <ChainInfoPageTable chainInfoList={chainInfoList as HeaderExtendedWithMapping[]}/>}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state:any)=>{
    return({
        ...state
    })
    
}
const mapDispatchToProps = (dispatch:any) =>{
    return dispatch
}
// export default connect(mapStateToProps,mapDispatchToProps)(ChainInfo);
export default ChainInfo
