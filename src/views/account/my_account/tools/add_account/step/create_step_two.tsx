import React, { useEffect, useImperativeHandle, useState } from "react";
import { Tooltip } from 'antd';
import IconFont from '../../../../../../components/icon_font';


interface Props {
    title: string,
    desc: string,
};



const PublicTitle = (props: Props): React.ReactElement => {
    return (
        <div className="public-title">
            <p>{props.title}</p>
            <Tooltip placement="top" title={props.desc}>
                <IconFont className="iconfont" type="icon-weibo" />
            </Tooltip>
        </div>
    )
};

const StepTwo = React.forwardRef((props: any, ref:any): React.ReactElement => {
    useImperativeHandle(ref, (): {} => ({
        // accountMsg: accountMsg
    }))
    const { accountMsg,setAccountMsg } = props;
    return (
        <div className="add-step-two">
            <div className="wallet-name wallet-inp-box">
                <PublicTitle title="Name" desc="Remark Text" />
                <input type="text" onChange={(e: any) => {
                    setAccountMsg({
                        ...accountMsg,
                        name: e.target.value
                    });
                    props.setInpName(e.target.value);
                }} placeholder="New Account" />
            </div>
            <div className="wallet-pass wallet-inp-box">
                <PublicTitle title="PassWord" desc="Remark Text" />
                <input type="password" onChange={(e: any) => {
                    setAccountMsg({
                        ...accountMsg,
                        password: e.target.value
                    })
                }} placeholder="Password" />
            </div>
            <div className="wallet-turn-pass wallet-inp-box">
                <PublicTitle title="PassWord(Repeat)" desc="Remark Text" />
                <input type="password" onChange={(e: any) => {
                    setAccountMsg({
                        ...accountMsg,
                        repeatpass: e.target.value
                    })
                }} placeholder="Password" />
            </div>
        </div>
    )
});

export default StepTwo;