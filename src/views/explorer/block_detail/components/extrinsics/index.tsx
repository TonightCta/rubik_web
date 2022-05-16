import * as React from "react";
import IconFont from "../../../../../components/icon_font";
import "./index.scss";
import PointTitle from "../../../../../components/point_title";
import BorderDashedBox from "../../../../../components/border-dashed-box";
const Extrinsics: React.FC = ({}): React.ReactElement<React.ReactNode> => {
  const [tableSetIndex, setTableSetIndex] = React.useState({
    timestamp: true,
    system: true,
  });
  return (
    <div className="extrinsics">
      <table>
        <thead>
          <tr className="extrinsics-tr">
            <th className="extrinsics-th">
              <div className="detail-box-title">
                <PointTitle text="extrinsics"/>
              </div>
            </th>
            <th className="extrinsics-th">
              <span className="extrinsics-span">events</span>
            </th>
            <th className="extrinsics-th last-th">
              <span className="extrinsics-span">signer</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="extrinsics-tr">
            <td>
              <div className="extrinsics-table-item">
                <div className="item-content" onClick={()=>{
                    setTableSetIndex({
                        ...tableSetIndex,
                        timestamp:!tableSetIndex.timestamp
                    })
                }}>
                  <p className="item-content-header">
                    timestamp.set
                    <IconFont
                      className={`iconfont-rotate ${
                        tableSetIndex.timestamp ? "show-icon" : ""
                      }`}
                      type="icon-you_right"
                    />
                  </p>
                  <p className="item-content-header-content">
                    SourceHanSansSC-regular
                  </p>
                </div>
                <div
                  className={`${
                    tableSetIndex.timestamp ? "show-content-item" : "display-none"
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
            </td>
            <td>
              <div className="extrinsics-table-item">
                <div className="item-content" onClick={()=>{
                    setTableSetIndex({
                        ...tableSetIndex,
                        system:!tableSetIndex.system
                    })
                }}>
                  <p>
                    system.ExtrinsicSuccess
                    <IconFont
                      className={`iconfont-rotate ${
                        tableSetIndex.system ? "show-icon" : ""
                      }`}
                      type="icon-you_right"
                    />
                  </p>
                  <p className="item-content-header-content">
                    An extrinsic completed successfully. {`[info]`}
                  </p>
                </div>
                <div
                  className={`${
                    tableSetIndex.system
                      ? "show-content-item"
                      : "display-none"
                  }`}
                >
                  <div className="left-bar"></div>
                  <div className="right-bar">
                      <BorderDashedBox header="DispatchInfo">
                        <div>
                        {"\u007b"} <br /> weight: 161,338,000,<br /> class: Mandatory,
                        <br /> paysFee: Yes
                        <br /> {"\u007d"}

                        </div>
                      </BorderDashedBox>
                  </div>
                </div>
              </div>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Extrinsics;
