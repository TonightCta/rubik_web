import React,{useState} from 'react'
import PointTitle from '../../../../../components/point_title/index';
import BorderDashedBox from '../../../../../components/border-dashed-box/index';
import IconFont from '../../../../../components/icon_font';


const Logs = () =>{
    const [tableSetIndex,SetTableSetIndex] = useState({
        isPreOpen:true
    })
    return (
        <div className='logs'>
            <PointTitle text='logs'/>
            <div className='logs-content'>
                <div className='logs-box'>
                    <p className='logs-box-title'>
                    PreRuntime
                    <IconFont
                      className={`iconfont-rotate ${
                        tableSetIndex.isPreOpen ? "show-icon" : ""
                      }`}
                      type="icon-you_right"
                    />
                    </p>
                </div>
                <div className='logs-box'>
                    <p className='logs-box-title'>
                    PreRuntime
                    <IconFont
                      className={`iconfont-rotate ${
                        tableSetIndex.isPreOpen ? "show-icon" : ""
                      }`}
                      type="icon-you_right"
                    />
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Logs