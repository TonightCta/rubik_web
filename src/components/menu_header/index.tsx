import React, {
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useReducer,
    useState,
} from "react";
import "./index.scss";
import TestImg from "../../assets/images/test.png";
import IconFont from "../icon_font";
// import AccountView from '../../views/account/index';
import { ActionType } from "../../typing/state";
import reducer from "../../reducer/index";
import { getHeaderList } from "../../utils/get_header_list";
import { useLocation, useNavigate } from 'react-router-dom';

const MenuHeader = (): React.ReactElement<ReactNode> => {
    const [state, dispatch] = useReducer(
        reducer.activeIndex.activeReducer,
        Number(sessionStorage.getItem("header_activeIndex")) || 0,
        reducer.activeIndex.initActive
    );
    const location = useLocation();
    const navigate = useNavigate()
    const [headerList, setHeaderList] = useState({
        title: "",
        labelList: [{ name: "", path: "" }],
    });
    useEffect((): void => {
        // 当activeIndex的发生改变时同步改变session
        sessionStorage.setItem(
            "header_activeIndex",
            JSON.stringify(state.activeIndex)
        );
        if (state.activeIndex != undefined && state.activeIndex >= 0 && state.activeIndex <= headerList.labelList.length - 1) {
            navigate(headerList.labelList[state.activeIndex as number].path)
        }
    }, [state.activeIndex]);
    useEffect((): void => {
        setHeaderList(getHeaderList(location.pathname.split("/")[1]));
        dispatch({
            type: ActionType.CHANGE_ACTIVE_INDEX,
            payload: { activeIndex: 0 },
        });
    }, [location.pathname.split("/")[1]]);
    const changeActiveIndex = (activeIndex: number): void => {
        dispatch({
            type: ActionType.CHANGE_ACTIVE_INDEX,
            payload: { activeIndex: activeIndex },
        });
    };
    const changePage = (pageName: string): void => {
        navigate(pageName)
    }
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
                <p className="route-name">{headerList.title}</p>
                <ul>
                    {headerList.labelList.map((item, index) => {
                        return (
                            <li
                                className={`${state.activeIndex == index ? "active-tab" : ""}`}
                                key={index}
                                onClick={(): void => {
                                    changeActiveIndex(index);
                                    // navigate(item.path)
                                }}
                            >
                                {item.name}
                                <span className="active-line"></span>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="rubik-help">
                <IconFont className="iconfont" type="icon-diantai_fm" />
            </div>
        </div>
    );
};

export default MenuHeader;
