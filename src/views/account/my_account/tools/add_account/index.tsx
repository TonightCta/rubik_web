import React, { useEffect, useState, useRef } from "react";
import IconFont from "../../../../../components/icon_font";
import { Modal, message } from "antd";
import StepOne from "./step/create_step_one";
import StepTwo from "./step/create_step_two";
import StepThree from "./step/create_step_three";
import TestImg from '../../../../../assets/images/test.png';
import PolkadotConfig from '../../../../../utils/api';

import './index.scss'

interface Props {
    step: number
}
interface PassFilter {
    name: string,
    password: string,
    repeatpass: string
}

const AddAccount = (): React.ReactElement => {
    const stepOneRef: any = useRef<HTMLDivElement>(null);
    const [accountMsg, setAccountMsg] = useState<PassFilter>({
        name: '',
        password: '',
        repeatpass: ''
    });
    // const stepTwoRef: any = useRef<HTMLDivElement>(null);
    const [accName, setAccName] = useState<string>('');
    // 窗口打开状态
    const [addAccount, setAddAcctount] = useState<boolean>(false);
    //创建步骤
    const [addStep, setAddStep] = useState<number>(1);
    // 生成地址
    const [resultAddress, setResultAddress] = useState<string>('')
    useEffect((): void => {
        !addAccount && setAddStep(1)
    }, [addAccount])
    // 窗口操作栏
    const FooterTool = (props: Props): React.ReactElement => {
        return (
            <div className="footer-tool">
                <p key="cancel" onClick={(): void => {
                    setAddAcctount(false);
                }}>
                    <IconFont className="iconfont" type="icon-guanbi-xiao_close-small" />
                    Cancel
                </p>
                {
                    props.step < 3
                        ? <p onClick={ async (): Promise<void> => {
                            let nowStep: number;
                            switch (props.step) {
                                case 1:
                                    nowStep = (!stepOneRef.current?.appove ? 1 : 2);
                                    nowStep == 1 && message.error('Please Appove')
                                    break;
                                case 2:
                                    const msg = accountMsg;
                                    if (!msg.name) {
                                        message.error('Please enter account name');
                                        return;
                                    };
                                    if (!msg.password) {
                                        message.error('Please enter password');
                                        return;
                                    };
                                    if (!msg.repeatpass) {
                                        message.error('Please enter password repeat');
                                        return;
                                    };
                                    if (msg.repeatpass !== msg.password) {
                                        message.error('Password does not match');
                                        return;
                                    };
                                    nowStep = 2;
                                    const hasData = JSON.parse(sessionStorage.getItem('createTwoMsg') as string)
                                    const { createWalletTwo } = PolkadotConfig;
                                    const result = await createWalletTwo(hasData.address,msg.name,msg.password,hasData.mnemonic,hasData.pairType);
                                    console.log(result);
                                    break;
                                default:
                                    nowStep = 1;
                            };
                            setAddStep(nowStep);
                        }}>
                            <IconFont className="iconfont" type="icon-you_right" />
                            Next
                        </p>
                        : <p onClick={(): void => {
                            setAddAcctount(false)
                        }}>
                            <IconFont className="iconfont" type="icon-dizhi" />
                            Done
                        </p>
                }
            </div>
        )
    };

    return (
        <div className="add-account">
            <div className="into-box" onClick={(): void => {
                setAddAcctount(true);
            }}>
                <div className="tool-icon-box">
                    <IconFont className="iconfont" type="icon-xingxing_star" />
                </div>
                <p>Add Account</p>
            </div>
            {/* 创建账户窗口 */}
            <Modal width="914px" onCancel={(): void => {
                setAddAcctount(false);
            }} wrapClassName="add-account-modal" footer={<FooterTool step={addStep} />} title={`Add an account via seed ${addStep}/3`} visible={addAccount}>
                <div className="address-msg">
                    <img src={TestImg} alt="" />
                    <p>
                        {
                            accName ?
                                <span>
                                    {accName}
                                    <br />
                                </span>
                                : ''
                        }
                        {resultAddress ? resultAddress : '5xxxxxxxxxxxxxxxxxxx'}
                    </p>
                </div>
                {
                    [
                        addStep == 1 && <StepOne updateAddress={setResultAddress} ref={stepOneRef} key={1} />,
                        addStep == 2 && <StepTwo accountMsg={accountMsg} setAccountMsg={setAccountMsg} setInpName={setAccName} key={2} />,
                        addStep == 3 && <StepThree key={3} />
                    ]
                }
            </Modal>
        </div>
    )
};

export default AddAccount;