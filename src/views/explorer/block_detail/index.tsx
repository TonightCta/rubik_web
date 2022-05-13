import React,{ReactNode} from "react";
import './index.scss'
const BlockDetail = ():React.ReactElement<ReactNode>=>{
    return (
        <div className="block-detail-bg">
            <div className="block-detail">
                    <div className="block-detail-box">
                <table>
                    <tr>
                        <th></th>
                        <th><span>hash
                            </span> </th>
                        <th><span>parent</span> </th>
                        <th><span>extrinsics</span> </th>
                        <th><span>state</span> </th>
                        <th><span></span></th>
                    </tr>
                    <tr>
                        <td><span>用户1</span> </td>
                        <td><span>0xe08e634ede00a3474bed41886a</span> </td>
                        <td><span>0x9a60fd115e87d6303df1074d4800</span></td>
                        <td><span>0xe5ce99d9cebe7e46335be1b22</span></td>
                        <td><span>0xe5ce99d9cebe7e46335be1b22</span></td>
                        <td><span>View this externally</span> </td>
                    </tr>
                </table>
                    </div>
                    <div className="block-detail-box">

                    </div>
                    <div className="block-detail-box">

                    </div>
                    <div className="block-detail-box">

                    </div>
            </div>
        </div>
    )
}
export default BlockDetail