import React,{useState} from 'react'
import PointTitle from '../../../../../components/point_title/index';
import BorderDashedBox from '../../../../../components/border-dashed-box/index';
import IconFont from '../../../../../components/icon_font';
import './index.scss'

const Logs = () =>{
    const [tableSetIndex,setTableSetIndex] = useState({
        isPreOpen:true,
        isSeal:true
    })
    return (
        <div className='logs'>
            <PointTitle text='logs'/>
            <div className='logs-content'>
                <div className='logs-box'>
                    <p className='logs-box-title' 
                    onClick={()=>{
                      setTableSetIndex({
                        ...tableSetIndex,
                        isPreOpen:!tableSetIndex.isPreOpen
                      })
                    }}
                    >
                    PreRuntime
                    <IconFont
                      className={`iconfont-rotate ${
                        tableSetIndex.isPreOpen ? "show-icon" : ""
                      }`}
                      type="icon-you_right"
                    />
                    </p>
                    <div
                  className={`${
                    tableSetIndex.isPreOpen ? "show-content-item" : "display-none"
                  }`}
                >
                  <div className="left-bar"></div>
                  <div className="right-bar">
                      <BorderDashedBox header="now:Compact">
                        <div>
                            <span className="extrinsics-span">
                            1649731095000
                            </span>
                        </div>
                      </BorderDashedBox>
                    <BorderDashedBox header="extrinsic hash">
                        <div>
                            <span className="extrinsics-span">
                        0x2f10b8b7aa9804fe07559b6c9c34e7faa96c2e4c28747d952a246d03dc1e1764
                          </span>
                        <IconFont className="iconfont" type="icon-lianshu" />
                        </div>
                    </BorderDashedBox>
                    {/* <div className="bar-item">
                      <p className="bar-item-header"></p>
                      <p className="bar-item-content">
                          
                      </p>
                    </div> */}
                  </div>
                </div>
                </div>
                <div className='logs-box'>
                    <p className='logs-box-title' onClick={()=>{
                      setTableSetIndex({
                        ...tableSetIndex,
                        isSeal:!tableSetIndex.isSeal
                      })
                    }}>
                    PreRuntime
                    <IconFont
                      className={`iconfont-rotate ${
                        tableSetIndex.isSeal ? "show-icon" : ""
                      }`}
                      type="icon-you_right"
                    />
                    </p>
                    <div
                  className={`${
                    tableSetIndex.isSeal ? "show-content-item" : "display-none"
                  }`}
                >
                  <div className="left-bar"></div>
                  <div className="right-bar">
                      <BorderDashedBox header="now:Compact">
                        <div>
                            <span className="extrinsics-span">
                            1649731095000
                            </span>
                        </div>
                      </BorderDashedBox>
                    <BorderDashedBox header="extrinsic hash">
                        <div>
                            <span className="extrinsics-span">
                        0x2f10b8b7aa9804fe07559b6c9c34e7faa96c2e4c28747d952a246d03dc1e1764
                          </span>
                        <IconFont className="iconfont" type="icon-lianshu" />
                        </div>
                    </BorderDashedBox>
                    {/* <div className="bar-item">
                      <p className="bar-item-header"></p>
                      <p className="bar-item-content">
                          
                      </p>
                    </div> */}
                  </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Logs