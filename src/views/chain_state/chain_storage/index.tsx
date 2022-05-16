import React, { ReactNode, useCallback, useEffect, useState } from "react";
import './index.scss';
import InpTitle from "../../../components/inp_title/inp_title";
import { Select } from "antd";
import IconFont from "../../../components/icon_font";

const { Option } = Select;

interface CreateStorage {
    name: string,
    type: string,
    value?: string | boolean
}

const ChainStorage = (): React.ReactElement<ReactNode> => {

    const [createList, setCreateList] = useState<CreateStorage[]>([]);

    const addChainStorage = (number: number): void => {
        let nowArr: CreateStorage[] = [];
        nowArr.push({
            name: `currentReportSlot():ReportSlot --------- ${number}`,
            type: 'The current report slot block number,this value should be a multiple of report slot block.',
        });
        setCreateList(createList.concat(nowArr))
    }
    const deleteChainStorage = (_index: number): void => {
        //     console.log(_index);
        //     console.log(createList)
        //     console.log(createList.splice(1, 1));
        // const test = Object.assign(createList);
        // test.splice(_index, 1);
        // console.log(test)
        // setCreateList(test);
        // const arr: number[] = [1, 2, 3, 4];
        // console.log(arr.splice(1, 1));
        // console.log(arr)
    };
    useEffect(() => {
        console.log(createList)
    }, [createList.length])
    return (
        <div className="chain-storage">
            <div className="create-select">
                <div className="selected-option">
                    <InpTitle title="Selected State Query" desc="Remark Text" />
                    <div className="option-inner">
                        <Select style={{ width: '150px', marginRight: '30px' }} defaultValue="jack">
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                        </Select>
                        <Select style={{ flex: 1 }} defaultValue="jack" onSelect={(): void => {

                        }}>
                            <Option value="jack" className="test-option">
                                <div className="option-deep" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p style={{ marginBottom: '0' }}>currentReportSlot():ReportSlot</p>
                                    <p style={{ marginBottom: '0' }}>The current report slot block number,this value should be a multiple of report slot block.</p>
                                </div>
                            </Option>
                            <Option value="lucy">Lucy</Option>
                        </Select>
                    </div>
                </div>
                <IconFont className="iconfont create-icon" key={'test'} type="icon-xingxing_star" onClick={() => {
                    addChainStorage(Math.random())
                }} />
            </div>
            <div className="create-result">
                {

                    createList.map((el: any, index: number): ReactNode => {
                        return (
                            <div key={index} className="result-inner-parent">
                                <div className="result-inner">
                                    <p>{el.name}.{el.type}</p>
                                    <p>1,108,800</p>
                                </div>
                                <IconFont key={index + 'delete'} onClick={() => {
                                    deleteChainStorage(index)
                                }} className="iconfont" type="icon-guanbi-xiao_close-small" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ChainStorage;