import React, { ReactNode, useCallback, useEffect, useMemo, useReducer, useState } from "react";
import './index.scss';
import TestImg from '../../assets/images/test.png'
import IconFont from "../icon_font";
// import AccountView from '../../views/account/index';
import { ActionType } from "../../typing/state";
import reducer from "../../reducer/index";
import { getHeaderList } from "../../utils/get_header_list";
import { useLocation } from "react-router-dom";

interface headerListItem{
    name:string,
    path:string
}
const MenuHeader = (): React.ReactElement<ReactNode> => {
    const [state, dispatch] = useReducer(
        reducer.activeIndex.activeReducer,
        Number(sessionStorage.getItem('header_activeIndex')) || 0,
        reducer.activeIndex.initActive);
    const location = useLocation();
    const [headerList,setHeaderList] = useState([
        {name:'',path:''}
    ])
    useMemo(() => {
        console.log(location)
    }, []);
    useEffect((): void => {
        // 当activeIndex的发生改变时同步改变session        
        sessionStorage.setItem('header_activeIndex', JSON.stringify(state.activeIndex))
    }, [state.activeIndex])
    useEffect(():void =>{
        console.log(getHeaderList(location.pathname))
        setHeaderList(getHeaderList(location.pathname))
        dispatch({
            type:ActionType.CHANGE_ACTIVE_INDEX,
            payload:{activeIndex:0}
        })
    },[location.pathname])
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
                    {
                        headerList.map((item,index)=>{
                            return(
                                <li className={`${state.activeIndex == index?'active-tab':''}`} onClick={():void =>{
                                    changeActiveIndex(index)
                                }}>
                                    {item.name}
                                    <span className="active-line"></span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="rubik-help">
                <IconFont className="iconfont" type="icon-diantai_fm" />
            </div>
        </div>
    )
};

export default MenuHeader;