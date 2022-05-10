import React, { ReactNode, useCallback, useEffect, useReducer } from "react";
import './index.scss';
import TestImg from '../../assets/images/test.png'
import IconFont from "../icon_font";
// import AccountView from '../../views/account/index';
import { ActionType } from "../../typing/state";
import reducer from "../../reducer/index";

const MenuHeader = (): React.ReactElement<ReactNode> => {
    const [state, dispatch] = useReducer(reducer.activeIndex.activeReducer, Number(sessionStorage.getItem('header_activeIndex')) || 0, reducer.activeIndex.initActive);
    useEffect(() => {
        // 进入页面获取activeIndex值
        const storageActiveIndex = sessionStorage.getItem('header_activeIndex')
        if (typeof (storageActiveIndex) == 'number') {
            dispatch({
                type: ActionType.CHANGE_ACTIVE_INDEX,
                payload: { activeIndex: JSON.parse(storageActiveIndex) }
            })
        }
    }, [])
    useEffect(() => {
        // 当activeIndex的发生改变时同步改变session        
        sessionStorage.setItem('header_activeIndex', JSON.stringify(state.activeIndex))
    }, [state.activeIndex])
    const changeActiveIndex = useCallback((activeIndex: number): void => {
        dispatch({
            type: ActionType.CHANGE_ACTIVE_INDEX,
            payload: { activeIndex: activeIndex }
        })
    }, [])
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
                    <li className={`${state.activeIndex === 0 ? 'active-tab' : ''}`} onClick={(): void => {
                        changeActiveIndex(0)
                    }}>
                        My&nbsp;Account
                        <span className="active-line"></span>
                    </li>
                    <li className={`${state.activeIndex === 1 ? 'active-tab' : ''}`} onClick={(): void => {
                        changeActiveIndex(1)
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