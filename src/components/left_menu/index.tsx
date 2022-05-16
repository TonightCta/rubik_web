import React, { ReactElement, ReactNode, useCallback, useEffect, useReducer, } from "react";
import { Link } from "react-router-dom";
import { Popover } from 'antd';
import { ActionType } from "../../typing/state";
import reducer from "../../reducer/index";
import './index.scss'

interface LowerMenu {
    lowerName: string,
    lowerUrl: string,
    levelOne?:string,
}
interface Menu {
    routeName: string,
    routeIcon: string,
    routeUrl: LowerMenu[] | string
    isRoute:boolean
}
const LeftMenu = (): React.ReactElement<ReactNode> => {
    //当前选中菜单
    const [state, dispatch] = useReducer(
        reducer.LeftActiveIndex.activeLeftReducer,
        sessionStorage.getItem('left_active_index') || 'Accounts',
        reducer.LeftActiveIndex.initLeftActive
    );

    useEffect((): void => {
        sessionStorage.setItem('left_active_index', String(state.leftActiveIndex));
        // console.log(state.leftActiveIndex)
    }, [state.leftActiveIndex])

    const changeLeftActiveIndex = useCallback((leftActive: string): void => {
        dispatch({
            type: ActionType.CHANGE_LEFT_ACTIVE,
            payload: { leftActiveIndex: leftActive }
        })
    }, []);
    // useEffect((): void => {
    //     console.log(state)
    // }, [])
    //菜单列表
    const menuList: Menu[] = [
        {
            routeName: 'Accounts',
            routeIcon: '-',
            isRoute:true,
            routeUrl: [
                {
                    lowerName: 'My Account',
                    lowerUrl: '/',
                    levelOne:'Accounts'
                },
            ]
        },
        {
            routeName: 'NetWork',
            routeIcon: '-',
            isRoute:true,
            routeUrl: [
                {
                    lowerName:'Explorer',
                    lowerUrl:'/explorer',
                    levelOne:'NetWork'
                },
                {
                    lowerName:'Staking',
                    lowerUrl:'/staking',
                    levelOne:'NetWork'
                }
            ]
        },
        {
            routeName:'Developer',
            routeIcon:'-',
            isRoute:true,
            routeUrl:[
                {
                    lowerName:'Chain state',
                    lowerUrl:'/chain-state',
                    levelOne:'Developer'
                },
                {
                    lowerName:'Extrinsics',
                    lowerUrl:'/extrinsics',
                    levelOne:'Developer'
                }
            ]
        },
        {
            routeName: 'Setting',
            routeIcon: '-',
            isRoute:true,
            routeUrl: [
                {
                    lowerName: 'Gneral',
                    lowerUrl: '/settings',
                    levelOne:'Setting'
                },
            ]
        },
        {
            routeName:'Github',
            routeIcon:'-',
            isRoute:false,
            routeUrl:'https://github.com/mannheim-network'
        },
        {
            routeName:'Wiki',
            routeIcon:'-',
            isRoute:false,
            routeUrl:'https://github.com/mannheim-network/wiki'
        }
    ];
    // 弹出菜单内容
    const Content = (uplevel: { props: LowerMenu[] }): ReactElement => {
        return (
            <div className="popover-list">
                {
                    uplevel.props.map((el: any, index: number) : ReactNode => {
                        return (
                            <Link key={index} to={el.lowerUrl}  onClick={(): void => {
                                changeLeftActiveIndex(el.levelOne)
                            }}>
                                <p>{el.lowerName}</p>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <div className="left-menu">
            <ul>
                {
                    menuList.map((el: Menu, index: number): ReactElement => {
                        if(el.isRoute){

                            return (
                                <li key={index} className={`${state.leftActiveIndex === el.routeName ? 'active-left-menu' : ''}`}>
                                <Popover placement="right" content={<Content props={el.routeUrl as LowerMenu[] || []} />} trigger="hover">
                                    <div className="route-icon"></div>
                                </Popover>
                                <p className="route-one-level-name">{el.routeName}</p>
                            </li>
                        )
                    }else {
                        return(
                            <li key={index} onClick={()=>{
                                window.open(el.routeUrl as string)
                            }}>
                                <div className="route-icon"></div>
                                <p className="route-one-level-name">{el.routeName}</p>
                            </li>
                        )
                    }
                    })
                }
            </ul>
        </div>
    )
}
export default LeftMenu;