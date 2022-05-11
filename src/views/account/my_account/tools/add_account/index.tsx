import React, { useEffect, useState } from "react";
import IconFont from "../../../../../components/icon_font";
import { Modal, Tooltip } from "antd";
import TestImg from '../../../../../assets/images/test.png'
import './index.scss'

interface Props {
    step: number
}

const AddAccount = (): React.ReactElement => {
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
                                    nowStep = 2;
                                    // console.log(1)
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
                        : <p>
                            <IconFont className="iconfont" type="icon-dizhi" />
                            Done
                        </p>
                }
            </div>
        )
    };

    // 步骤一

    const StepOne = (): React.ReactElement => {
        return (
            <div className="add-step-one">
                <div className="address-msg">
                    <img src={TestImg} alt="" />
                    <p>r7HRwYF2u9SoxQ473sx2izSJrqTiDUr2ucniifbtNbdC1Qvuf</p>
                </div>
                {/* 助记词 */}
                <div className="word-box">
                    <div className="word-help">
                        <p>
                            mnemonic seed
                        </p>
                        <Tooltip placement="top" title='Remark Text'>
                            <IconFont className="iconfont" type="icon-shijian" />
                        </Tooltip>
                    </div>
                </div>
            </div>
        )
    }

    // 步骤二

    const StepTwo = (): React.ReactElement => {
        return (
            <div className="add-step-one">
                步骤二
            </div>
        )
    }

    // 步骤三

    const StepThree = (): React.ReactElement => {
        return (
            <div className="add-step-one">
                步骤三
            </div>
        )
    }

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
                {
                    [
                        addStep == 1 && <StepOne key={1} />,
                        addStep == 2 && <StepTwo key={2} />,
                        addStep == 3 && <StepThree key={3} />
                    ]
                }
            </Modal>
        </div>
    )
};

export default AddAccount;