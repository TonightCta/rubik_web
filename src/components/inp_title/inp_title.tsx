import React, { ReactNode } from "react";
import { Tooltip } from "antd";
import IconFont from "../icon_font";

interface Props{
    title:string,
    desc:string
}

const InpTitle = (props:Props): React.ReactElement<ReactNode> => {
    return (
        <div className="public-title">
            <p>{props.title}</p>
            <Tooltip placement="top" title={props.desc}>
                <IconFont className="iconfont" type="icon-weibo" />
            </Tooltip>
        </div>
    )
};

export default InpTitle;