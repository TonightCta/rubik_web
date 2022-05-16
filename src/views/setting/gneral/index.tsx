import React, { ReactNode, useEffect, useState } from "react";
import './index.scss'
import TestImg from '../../../assets/images/test.png';
import InpTitle from "../../../components/inp_title/inp_title";
import IconFont from "../../../components/icon_font";

interface Props {
    title: string,
    desc: string
}
interface OptionMsg {
    connectStatus: boolean,
    iconStatus: boolean,
    chooseNetwork?: string,
    chooseIcon?: string,
}
const Gneral = (): React.ReactElement<ReactNode> => {

    const [arr, setArr] = useState([1]);


    // useEffect(() => {

    // }, [])
    const [optionStatus, setOptionStatus] = useState<OptionMsg>({
        connectStatus: false,
        iconStatus: false,
        chooseNetwork: 'Default for the connected node',
        chooseIcon: 'RoboHash',
    });
    const networkList: { icon: unknown, name: string }[] = [
        {
            icon: TestImg,
            name: 'Default for the connected node',
        },
        {
            icon: TestImg,
            name: 'Polkadot Relay Chain',
        },
        {
            icon: TestImg,
            name: 'Kusama Relay Chain',
        },
    ];

    const iconList: { icon: unknown, name: string }[] = [
        {
            icon: TestImg,
            name: 'RoboHash'
        },
        {
            icon: TestImg,
            name: 'Polkadot'
        },
        {
            icon: TestImg,
            name: 'Beachball'
        },
    ]
    // 节点选择
    const ConnectNode = (props: Props): React.ReactElement => {
        return (
            <div className={`connect-node ${optionStatus.connectStatus ? 'show-connect-options' : ''}`} onClick={(e: any): void => {
                setOptionStatus({
                    ...optionStatus,
                    connectStatus: !optionStatus.connectStatus
                })
            }}>
                <div className="connect-default">
                    <div className="set-icon">
                        <img src={TestImg} alt="" />
                    </div>
                    <div className="option-show">
                        {!optionStatus.connectStatus && <InpTitle title={props.title} desc={props.desc} />}
                        <p>{optionStatus.chooseNetwork}</p>
                    </div>
                    <IconFont className={`iconfont option-show-status ${optionStatus.connectStatus && 'option-hidden'}`} type="icon-you_right" />
                </div>
                <div className="connect-options">
                    <ul>
                        {
                            networkList.map((el: any, index: number): ReactNode => {
                                return (
                                    <li key={index} className={`${optionStatus.chooseNetwork === el.name ? 'default-bg' : ''}`} onClick={(e: any): void => {
                                        e.stopPropagation();
                                        setOptionStatus({
                                            ...optionStatus,
                                            connectStatus: false,
                                            chooseNetwork: el.name
                                        })
                                    }}>
                                        <img src={el.icon} alt="" />
                                        <p>{el.name}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    // 头像风格选择
    const IconStyle = (props: Props): React.ReactElement => {
        return (
            <div className={`connect-node ${optionStatus.iconStatus ? 'show-connect-options' : ''}`} onClick={(): void => {
                setOptionStatus({
                    ...optionStatus,
                    iconStatus: !optionStatus.iconStatus
                })
            }}>
                <div className="connect-default">
                    <div className="set-icon">
                        <img src={TestImg} alt="" />
                    </div>
                    <div className="option-show">
                        {!optionStatus.iconStatus && <InpTitle title={props.title} desc={props.desc} />}
                        <p>{optionStatus.chooseIcon}</p>
                    </div>
                    <IconFont className={`iconfont option-show-status ${optionStatus.iconStatus && 'option-hidden'}`} type="icon-you_right" />
                </div>
                <div className="connect-options">
                    <ul>
                        {
                            iconList.map((el: any, index: number): ReactNode => {
                                return (
                                    <li key={index} className={`${optionStatus.chooseIcon === el.name ? 'default-bg' : ''}`} onClick={(e: any): void => {
                                        e.stopPropagation();
                                        setOptionStatus({
                                            ...optionStatus,
                                            iconStatus: false,
                                            chooseIcon: el.name
                                        });
                                    }}>
                                        <img src={el.icon} alt="" />
                                        <p>{el.name}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <div className="setting-gneral">
            <div className="gneral-inner">
                <ConnectNode title="Address Prefix" desc="Remark Text" />
                <IconStyle title="Default Icon Theme" desc="Remark Text" />
            </div>
        </div>
    )
};
export default Gneral;