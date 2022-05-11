import React, { useState, useImperativeHandle } from "react";
import { Tooltip, Popover, Checkbox } from 'antd';
import IconFont from '../../../../../../components/icon_font'

const StepOne = React.forwardRef((props, ref): React.ReactElement => {
    // 助记词类型
    const [wordType, setWordType] = useState<number>(1);
    const [popShow, setPopShow] = useState<boolean>(false);
    const [appove, setAppove] = useState<boolean>(false);
    const [optionsStatus, setOptionsStatus] = useState<boolean>(false);
    const WordType = (): React.ReactElement => {
        return (
            <div className="word-type-inner">
                <p onClick={(): void => {
                    setWordType(1);
                    setPopShow(false)
                }}>Mnemonic</p>
                <p onClick={(): void => {
                    setWordType(2)
                    setPopShow(false)
                }}>Raw seed</p>
            </div>
        )
    };
    useImperativeHandle(ref, (): {} => ({
        appove: appove
    }));
    return (
        <div className="add-step-one">
            
            <div className="word-box">
                {/* 助记词 - Help */}
                <div className="word-help">
                    <p>
                        mnemonic seed
                    </p>
                    <Tooltip placement="top" title='Remark Text'>
                        <IconFont className="iconfont" type="icon-shijian" />
                    </Tooltip>
                </div>
                {/* 助记词 */}
                <div className="word-inner-box">
                    <div className="word-inner">
                        <p>
                            enlist delay erode useless pulp trophy gate spy deny expire uniform energy
                        </p>
                    </div>
                    <div className="word-oper">
                        <IconFont className="" type="icon-weixin" />
                        <Popover visible={popShow} onVisibleChange={(e) => {
                            setPopShow(e)
                        }} trigger={'click'} placement="bottom" content={<WordType />}>
                            <div className="word-type-box">
                                {
                                    wordType == 1 ? 'Mnemonic' : 'Raw seed'
                                }
                                <IconFont className="iconfont" type="icon-you_right" />
                            </div>
                        </Popover>
                    </div>
                </div>
            </div>
            {/* 助记词说明 */}
            <p className="word-remark">
                The secret seed value for this account. Ensure that you keep this in a safe place,
                <br />
                with access to the seed you can re-create the account.
            </p>
            <div className="adv-options" onClick={(): void => {
                setOptionsStatus(!optionsStatus)
            }}>
                <p>Advanced creation options</p>
                <IconFont className={`iconfont ${optionsStatus ? 'show-icon' : ''}`} type="icon-you_right" />
            </div>
            {/* Options集合 */}
            {
                optionsStatus && <div className="option-list">
                    <div className="option-type option-public">
                        <div className="option-title-remark">
                            <p>
                                keypair crypto type
                            </p>
                            <Tooltip placement="top" title='Remark Text'>
                                <IconFont className="iconfont" type="icon-shijian" />
                            </Tooltip>
                        </div>
                    </div>
                    <div className="option-path option-public">
                        <div className="option-title-remark">
                            <p>
                                secret derivation path
                            </p>
                            <Tooltip placement="top" title='Remark Text'>
                                <IconFont className="iconfont" type="icon-shijian" />
                            </Tooltip>
                        </div>
                        <div className="inp-path">
                            <input type="text" placeholder="//hard/soft///password"/>
                        </div>
                    </div>
                </div>
            }
            {/* !Attention */}
            <div className="attention-box">
                <IconFont className="iconfont" type="icon-xingxing_star" />
                <p>
                    Consider storing your account in a signer such as a browser extension, hardware device, QR-capable phone wallet (non-connected) or desktop application for optimal account security. Future versions of the web-only interface will drop support for non-external accounts, much like the IPFS version.
                </p>
            </div>
            {/* Agree - Check */}
            <div className="check-protocol">
                <Checkbox onChange={(e: any) => {
                    setAppove(e.target.checked);
                }}>
                    I have saved my mnemonic seed safely
                </Checkbox>
            </div>
        </div>
    )
});
export default StepOne;