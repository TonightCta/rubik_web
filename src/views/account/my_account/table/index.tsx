import React, { ReactNode,useState } from "react";
import { Space, Table, Tag, Popover } from 'antd';
import { ColumnsType } from "antd/lib/table";
import IconFont from '../../../../components/icon_font'
import index from "../../../index";

interface TableColumns {
    title?: string,
    dataIndex?: string,
    key: number,
    render?: Function | ReactNode
};

const AccountTable = (): React.ReactElement => {
    const [heimIndexClass,setHeimIndexClass] = useState({
        heimIndex:-1,
        listIndex:-1
    })
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
            title: 'HEIM',
            key: 'HEIM',
            render: (text: string, record: any) => (
                <div className="heim-oper-box">
                    <Popover
                    title='title'
                    trigger='click'
                    visible={heimIndexClass.heimIndex == record.key}
                    onVisibleChange={()=>{
                        heimIndexClass.heimIndex == record.key?setHeimIndexClass({
                            ...heimIndexClass,
                            heimIndex:-1
                        }):
                        setHeimIndexClass({
                            ...heimIndexClass,
                            heimIndex:record.key
                        })
                    }}
                    >
                        <p>1234</p>
                    </Popover>
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
            TransacTions:'0xcdbca9ba.....9a9a9ac93e9a1b58',
            downStatus:false,
            tags: [],
        },
        {
            key: 2,
            Accounts: 'User 2',
            Parent: '...',
            Type: 'sr25519',
            downStatus:false,
            TransacTions:'0xcdbca9ba.....9a9a9ac93e9a1b58',
            tags: ['loser'],
        },
        {
            key: 3,
            Accounts: 'User 3',
            Parent: '...',
            Type: 'sr25519',
            TransacTions:'0xcdbca9ba.....9a9a9ac93e9a1b58',
            downStatus:false,
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
        </div>
    )
};

export default AccountTable;

