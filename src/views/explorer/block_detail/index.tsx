import React, { ReactNode } from "react";
import "./index.scss";
import IconFont from "../../../components/icon_font";
import { numFun } from "../../../utils/filter";
import ExplorerView from './components/extrinsics/index';
import PointTitle from '../../../components/point_title/index';
import SystemEvents from './components/system_events/index';
const BlockDetail = (): React.ReactElement<ReactNode> => {
  return (
    <div className="block-detail-bg">
      <div className="block-detail">
        <div className="block-detail-box number-box">
          <table>
            <thead>
                <tr>

              <th>
                <div className="detail-box-title">
                    <PointTitle text={numFun("1359477")}/>
                </div>
              </th>
              <th>
                <span>hash</span>{" "}
              </th>
              <th>
                <span>parent</span>{" "}
              </th>
              <th>
                <span>extrinsics</span>{" "}
              </th>
              <th>
                <span>state</span>{" "}
              </th>
              <th>
                <span></span>
              </th>
                </tr>
            </thead>
            <tbody>

            <tr>
              <td>
                <span>
                  <IconFont className="iconfont" type="icon-lianshu" />
                  用户1
                </span>{" "}
              </td>
              <td>
                <span>0xe08e634ede00a3474bed41886a</span>{" "}
              </td>
              <td>
                <span>0x9a60fd115e87d6303df1074d4800</span>
              </td>
              <td>
                <span>0xe5ce99d9cebe7e46335be1b22</span>
              </td>
              <td>
                <span>0xe5ce99d9cebe7e46335be1b22</span>
              </td>
              <td>
                <span>View this externally</span>{" "}
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className="block-detail-box">
            <ExplorerView/>
        </div>
        <div className="block-detail-box">
            <SystemEvents/>
        </div>
        <div className="block-detail-box"></div>
      </div>
    </div>
  );
};
export default BlockDetail;
