import React, { ReactElement, ReactNode, } from "react";
import { Link } from "react-router-dom";
import { Popover } from 'antd';
import './index.scss'

interface LowerMenu {
    lowerName: string,
    lowerUrl: string
}
interface Menu {
    routeName: string,
    routeIcon: string,
    routeUrl: LowerMenu[]
}
const LeftMenu = (): React.ReactElement<ReactNode> => {
    const menuList: Menu[] = [
        {
            routeName: 'Accounts',
            routeIcon: '-',
            routeUrl: [
                {
                    lowerName: 'My Account',
                    lowerUrl: '/'
                },
            ]
        },
        {
            routeName: 'NetWork',
            routeIcon: '-',
            routeUrl: [
                {
                    lowerName: 'Chain Info',
                    lowerUrl: '/'
                },
                {
                    lowerName: 'Block Details',
                    lowerUrl: '/'
                },
            ]
        },
        {
            routeName: 'Setting',
            routeIcon: '-',
            routeUrl: [
                {
                    lowerName: 'Gneral',
                    lowerUrl: '/setting'
                },
            ]
        },
    ];
    const Content = (uplevel: { props: LowerMenu[] }): ReactElement => {
        return (
            <div className="popover-list">
                {
                    uplevel.props.map((el: any, index: number) => {
                        return (
                            <Link key={index} to={el.lowerUrl}>
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
                    menuList.map((el: any, index: number): ReactElement => {
                        return (
                            <li key={index}>
                                <Popover placement="right" content={<Content props={el.routeUrl || []} />} trigger="hover">
                                    <div className="route-icon"></div>
                                </Popover>
                                <p className="route-one-level-name">{el.routeName}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default LeftMenu;