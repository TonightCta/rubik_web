import React, { ReactNode, useState } from "react";
import IconFont from "../../../../../components/icon_font";
import { Modal } from "antd";
import './index.scss'

interface Props{
    step:number
}

const AddAccount = (): React.ReactElement => {
    // 窗口打开状态
    const [addAccount, setAddAcctount] = useState<boolean>(false);
    //创建步骤
    const [addStep, setAddStep] = useState<number>(1);

    const FooterTool = (props:Props): React.ReactElement => {
        return (
            <div className="footer-tool">
                <p key="cancel">
                    <IconFont className="iconfont" type="icon-guanbi-xiao_close-small" />
                    Cancel
                </p>
                <p>
                    <IconFont className="iconfont" type="icon-you_right" />
                    Next
                </p>
            </div>
        )
    }
    return (
        <div className="add-account">
            <div className="into-box" onClick={() => {
                setAddAcctount(true);
            }}>
                <div className="tool-icon-box">
                    <IconFont className="iconfont" type="icon-xingxing_star" />
                </div>
                <p>Add Account</p>
            </div>
            {/* 创建账户窗口 */}
            {/* Step --> 1 */}
            <Modal wrapClassName="add-account-modal" footer={<FooterTool step={1}/>} title={`Add an account via seed ${addStep}/3`} visible={addAccount}>
                <p>1</p>
            </Modal>
        </div>
    )
};

export default AddAccount;