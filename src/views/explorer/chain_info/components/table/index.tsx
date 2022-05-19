import React, { useState, useEffect } from "react";
import IconFont from "../../../../../components/icon_font";
import { numFun, strOmit } from "../../../../../utils/filter";
import { HeaderExtendedWithMapping } from "../../../../../typing/apiType";
import { Link } from "react-router-dom";
import "./index.scss";

interface Props {
  chainInfoList: HeaderExtendedWithMapping[];
}
const ChainInfoPageTable = ({
  chainInfoList,
}: Props): React.ReactElement<React.ReactNode> => {
  return (
    <div className="chain-info-page-table">
      <ul>
        {(chainInfoList as HeaderExtendedWithMapping[]).map(
          (item1: any, index: number) => {
            const item = item1[0];
            return (
              <li key={index}>
                <div className="table-number">
                  <Link to={`/explore/query/${item.hash.toHex()}`}>
                    {numFun(item.number.toString())}
                  </Link>
                </div>
                <div className="table-hash">{item.hash.toHex()}</div>
                {item.authorFromMapping ? (
                  <div className="table-account">
                    <IconFont className="iconfont" type={"icon-diantai_fm"} />
                    {item.author && (
                      <span className="account-name">
                        {strOmit(item.author.toString())}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="table-account">
                    <IconFont className="iconfont" type={"icon-diantai_fm"} />
                    {item.author && (
                      <span className="account-name">
                        {strOmit(item.author.toString())}
                      </span>
                    )}
                  </div>
                )}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};
export default ChainInfoPageTable;
