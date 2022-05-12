import React, { ReactNode, useState, useRef, ReactHTMLElement, useCallback } from "react";
import { Table, Tag, Popover, Switch } from 'antd';
import { ColumnsType } from "antd/lib/table";
import IconFont from '../../../../components/icon_font';
import SendBox from './send/send_modal'

interface TableColumns {
    title?: string,
    dataIndex?: string,
    key: number,
    render?: Function | ReactNode
};


const AccountTable = (): React.ReactElement => {
    const [heimIndexClass, setHeimIndexClass] = useState({
        heimIndex: -1,
        listIndex: -1,
        id: '',
    });

    const getSendMsg = useCallback(() : void => {
        console.log('Send Emit Message')
    },[])

    const sendBoxRef : any = useRef<HTMLDivElement>(null);
    
    const MoreHeim = (props: { id: string }): React.ReactElement => {
        return (
            <div className="more-heim-oper">
                <ul>
                    <li>Set on-chain identity</li>
                    <li>Derive account via derivation path</li>
                    <li>Create a backup file for this accout</li>
                    <li>Delegate democracy votes</li>
                </ul>
                <div className="row-switch">
                    only this network&nbsp;&nbsp;&nbsp;
                    <Switch defaultChecked />
                </div>
            </div>
        )
    }

    const columns: ColumnsType<TableColumns> = [
        {
            title: 'Accounts',
            dataIndex: 'Accounts',
            key: 'Accounts',
        },
        {
            title: 'Parent',
            dataIndex: 'Parent',
            key: 'Parent',
        },
        {
            title: 'Type',
            dataIndex: 'Type',
            key: 'Type',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (tags: []) => (
                <>
                    {tags.length > 0 ? tags.map((tag: any) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    }) : 'No Tags'}
                </>
            ),
        },
        {
            title: 'TransacTions',
            dataIndex: 'TransacTions',
            key: 'TransacTions',
        },
        {
            title: (<span style={{ display: 'table', margin: '0 auto' }}>HEIM</span>),
            key: 'HEIM',
            render: (text: string, record: any) => (
                <div className="heim-oper-box">
                    <div className="heim-trans">
                        <div className="trans-out" onClick={(): void => {
                            setHeimIndexClass({
                                ...heimIndexClass,
                                listIndex: heimIndexClass.listIndex == record.key ? - 1 : record.key
                            })
                        }}>
                            <p>0.0000 HEIM</p>
                            <IconFont className={`iconfont ${heimIndexClass.listIndex == record.key ? 'show-icon-heim' : ''}`} type="icon-you_right" />
                        </div>
                        {
                            heimIndexClass.listIndex == record.key &&
                            <p>transferrable   0.0000 HEIM</p>
                        }
                    </div>
                    <div className="send-box" onClick={(): void => {
                        setHeimIndexClass({
                            ...heimIndexClass,
                            id: record.key
                        });
                        sendBoxRef.current?.emitSetSendBox(true);
                    }}>
                        <IconFont className="iconfont more-heim-icon" type="icon-lianshu" />
                        Send
                    </div>
                    <Popover
                        placement="bottom"
                        trigger='click'
                        content={<MoreHeim id={record.key} />}
                        visible={heimIndexClass.heimIndex == record.key}
                        onVisibleChange={() => {
                            heimIndexClass.heimIndex == record.key ? setHeimIndexClass({
                                ...heimIndexClass,
                                heimIndex: -1
                            }) :
                                setHeimIndexClass({
                                    ...heimIndexClass,
                                    heimIndex: record.key
                                })
                        }}
                    >
                        <IconFont className="iconfont more-heim-icon" type="icon-dizhi" />
                    </Popover>
                    <IconFont className="iconfont more-heim-icon out-link" type="icon-xingxing_star" />
                </div>
            ),
        },
    ];
    const data = [
        {
            key: 1,
            Accounts: 'User 1',
            Parent: '...',
            Type: 'sr25519',
            TransacTions: '0xcdbca9ba.....9a9a9ac93e9a1b58',
            downStatus: false,
            tags: [],
        },
        {
            key: 2,
            Accounts: 'User 2',
            Parent: '...',
            Type: 'sr25519',
            downStatus: false,
            TransacTions: '0xcdbca9ba.....9a9a9ac93e9a1b58',
            tags: ['loser'],
        },
        {
            key: 3,
            Accounts: 'User 3',
            Parent: '...',
            Type: 'sr25519',
            TransacTions: '0xcdbca9ba.....9a9a9ac93e9a1b58',
            downStatus: false,
            tags: ['cool', 'teacher'],
        },
    ];

    return (
        <div className="account-table">
            <div className="search-for-accounts">
                <IconFont className="iconfont" type="icon-sousuo_search" />
                <input type="text" placeholder="Type Here" />
            </div>
            <Table<TableColumns> bordered={false} columns={columns} dataSource={data}></Table>
            <SendBox id={heimIndexClass.id} ref={sendBoxRef} getSendMsg={getSendMsg}/>
        </div>
    )
};

export default AccountTable;

