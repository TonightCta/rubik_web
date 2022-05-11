import React, { useEffect, useState, useRef } from "react";
import IconFont from "../../../../../components/icon_font";
import { Modal, message } from "antd";
import StepOne from "./step/create_step_one";
import StepTwo from "./step/create_step_two";
import StepThree from "./step/create_step_three";
import TestImg from '../../../../../assets/images/test.png';
import './index.scss'

interface Props {
    step: number
}

const AddAccount = (): React.ReactElement => {
    const stepOneRef: any = useRef<HTMLDivElement>(null);
    // const stepTwoRef: any = useRef<HTMLDivElement>(null);
    const [accName, setAccName] = useState<string>('');
    // 窗口打开状态
    const [addAccount, setAddAcctount] = useState<boolean>(false);
    //创建步骤
    const [addStep, setAddStep] = useState<number>(1);
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
                        ? <p onClick={(): void => {
                            let nowStep: number;
                            switch (props.step) {
                                case 1:
                                    nowStep = (!stepOneRef.current?.appove ? 1 : 2);
                                    nowStep == 1 && message.error('Please Appove')
                                    break;
                                case 2:
                                    nowStep = 3;
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
                        r7HRwYF2u9SoxQ473sx2izSJrqTiDUr2ucniifbtNbdC1Qvuf</p>
                </div>
                {
                    [
                        addStep == 1 && <StepOne ref={stepOneRef} key={1} />,
                        addStep == 2 && <StepTwo setInpName={setAccName} key={2} />,
                        addStep == 3 && <StepThree key={3} />
                    ]
                }
            </Modal>
        </div>
    )
};

export default AddAccount;