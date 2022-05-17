import React, { useEffect, useImperativeHandle, useState } from "react";
import { Tooltip } from 'antd';
import IconFont from '../../../../../../components/icon_font';
import PolkadotConfig from '../../../../../../utils/api';


interface Props {
    title: string,
    desc: string
};

interface PassFilter {
    name: string,
    password: string,
    repeatpass: string
}

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

const StepTwo = React.forwardRef((props: any, ref): React.ReactElement => {
    useEffect(() => {
        console.log(123)
    },[])
    const [accountMsg, setAccountMsg] = useState<PassFilter>({
        name: '',
        password: '',
        repeatpass: ''
    });
    useImperativeHandle(ref, (): {} => ({
        accountMsg: accountMsg
    }))
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