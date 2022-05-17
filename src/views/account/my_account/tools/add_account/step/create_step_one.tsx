import React, { useState, useImperativeHandle, useEffect } from "react";
import { Tooltip, Popover, Checkbox, Select } from 'antd';
import IconFont from '../../../../../../components/icon_font';
import PolkadotConfig from '../../../../../../utils/api';
// import { useDebouncedCallback } from 'use-debounce'

const { Option } = Select;

interface CreateParent {
    address: string,
    mnemonic: string,
}

interface Props {
    updateAddress: Function
}

const StepOne = React.forwardRef((props: Props, ref: any): React.ReactElement => {
    // 助记词类型
    const [wordType, setWordType] = useState<{ idsType: number, operType: number }>({
        idsType: 1,
        operType: 1,
    });
    // 弹出框显示&隐藏
    const [popShow, setPopShow] = useState<boolean>(false);
    // 协议同意
    const [appove, setAppove] = useState<boolean>(false);
    // 高级选项打开状态
    const [optionsStatus, setOptionsStatus] = useState<boolean>(false);
    // 生成密钥信息
    const [setpOneMsg, setStepOneMsg] = useState<CreateParent>({
        address: '',
        mnemonic: '',
    });
    // 密钥加密方式
    const [cryptoType, setCryptoType] = useState<string>('sr25519');
    const WordType = (): React.ReactElement => {
        return (
            <div className="word-type-inner">
                <p onClick={(): void => {
                    setWordType({
                        idsType: 1,
                        operType: 1,
                    });
                    setPopShow(false);
                }}>Mnemonic</p>
                <p onClick={(): void => {
                    setWordType({
                        idsType: 2,
                        operType: 1,
                    });
                    setPopShow(false)
                }}>Raw seed</p>
            </div>
        )
    };
    const Cryptonode = (): React.ReactElement => {
        return (
            <Select value={cryptoType} onChange={(val) => {
                console.log(val);
                setWordType({
                    ...wordType,
                    operType: 2,
                });
                setCryptoType(val);
            }} style={{ width: '100%' }} bordered={false}>
                <Option value="sr25519">Schnorrkel(sr25519,recommended)</Option>
                <Option value="ed25519">Edwards(ed25519,alternative)</Option>
            </Select>
        )
    }

    const getDefaultCreate = async (): Promise<void> => {
        const { createWalletOne } = PolkadotConfig;
        const result: any = await createWalletOne(wordType.idsType, cryptoType, wordType.operType, setpOneMsg.mnemonic);
        const nextNeed: { mnemonic: string, pairType: string } = {
            mnemonic: result.mnemonic,
            pairType: cryptoType
        };
        sessionStorage.setItem('createTwoMsg', JSON.stringify(nextNeed));
        const { updateAddress } = props;
        updateAddress(result.address);
        setStepOneMsg({
            ...setpOneMsg,
            address: result.address,
            mnemonic: result.mnemonic
        });
    }
    useEffect(() => {
        getDefaultCreate();
    }, [wordType, cryptoType]);
    useImperativeHandle(ref, (): {} => ({
        appove: appove,
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
                            {setpOneMsg.mnemonic}
                        </p>
                    </div>
                    <div className="word-oper">
                        <IconFont className="" type="icon-weixin" />
                        <Popover visible={popShow} onVisibleChange={(e) => {
                            setPopShow(e)
                        }} trigger={'click'} placement="bottom" content={<WordType />}>
                            <div className="word-type-box">
                                {
                                    wordType.idsType == 1 ? 'Mnemonic' : 'Raw seed'
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
                        <Cryptonode />
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
                            <input type="text" placeholder="//hard/soft///password" />
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