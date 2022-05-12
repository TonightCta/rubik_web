import * as React from 'react';
import ChainInfoPageHeader from './components/Header';
import './index.scss'
import IconFont from '../../../components/icon_font';
import ChainInfoPageTable from './components/table/index';
 const ChainInfo:React.FC = ():React.ReactElement<React.ReactNode>=>{
     const [infoIndex,setInfoIndex] = React.useState(0)
     return(
         <div className='chain-info-page'>
             <ChainInfoPageHeader/>
             <div className='chain-info-page-table-back'>
                    <div className='chain-info-page-table-box'>
                        <div className='chain-info-page-switch'>
                            <div className={`${infoIndex == 0?'switch-choose':'switch-unchoose'}`} onClick={()=>setInfoIndex(0)}>recent blocks</div>
                            <div className={`${infoIndex == 1?'switch-choose':'switch-unchoose'}`} onClick={()=>setInfoIndex(1)}>recent events</div>
                        </div>
                         { infoIndex == 0&&<ChainInfoPageTable/>}
                    </div>
             </div>
         </div>
     )
 }
 export default ChainInfo