import React, { ReactNode, useState } from "react";
import './index.scss';
import TestImg from '../../assets/images/test.png'
import IconFont from "../icon_font";

const MenuHeader = (): React.ReactElement<ReactNode> => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    return (
        <div className="menu-header">
            <div className="menu-logo">
                <div className="avatar-box">
                    <img src={TestImg} alt="" />
                </div>
                <div className="version-box">
                    <p>Rubik</p>
                    <p>Version 11</p>
                </div>
            </div>
            <div className="menu-list">
                <p className="route-name">Accounts</p>
                <ul>
                    <li className={`${activeIndex == 0 && 'active-tab'}`} onClick={(): void => {
                        setActiveIndex(0)
                    }}>
                        My&nbsp;Account
                        <span className="active-line"></span>
                    </li>
                    <li className={`${activeIndex == 1 && 'active-tab'}`} onClick={(): void => {
                        setActiveIndex(1)
                    }}>
                        Test&nbsp;Tab
                        <span className="active-line"></span>
                    </li>
                </ul>
            </div>
            <div className="rubik-help">
                <IconFont className="iconfont" type="icon-diantai_fm" />
            </div>
        </div>
    )
};

export default MenuHeader;