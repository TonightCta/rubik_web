import React, { ReactNode, useState } from "react";
import { Select, Switch } from "antd";
import InpTitle from "../../../../../../components/inp_title/inp_title";
import IconFont from "../../../../../../components/icon_font";

const { Option } = Select;

const SendStepOne = (): React.ReactElement<ReactNode> => {

    const [optionStatus, setOptionStatus] = useState<boolean>(false)

    return (
        <div className="send-step-one">
            {/* Send from Account */}
            <div className="send-account">
                <div className="account-avatar"></div>
                <div className="title-and-transfer">
                    <InpTitle title="Send From Account" desc="Remark Text" />
                    <p>
                        transferrable&nbsp;0.0000&nbsp;HEMI
                    </p>
                </div>
                <div className="send-address">
                    <p>DARA</p>
                    <p>r7Gs7wsbwcdfRUjcxC13o9ZczgDRKQqgx4jJZMoeUjfFn7ENs...</p>
                </div>
            </div>
            <p className="send-remark-text">The transferred balance will be subtracted (along with fees) from the sender account.</p>
            {/* Send To Account */}
            <div className="send-account">
                <div className="account-avatar"></div>
                <div className="title-and-transfer">
                    <InpTitle title="Send From Account" desc="Remark Text" />
                    <p>
                        transferrable&nbsp;0.0000&nbsp;HEMI
                    </p>
                </div>
                <div className="send-address send-to-address">
                    <Select
                        placeholder="Account Name"
                        optionFilterProp="children"
                        style={{ width: '50%' }}
                        bordered={false}
                        onChange={(e: any) => {
                            console.log(e)
                        }}
                        showSearch
                        onSearch={(e: any) => {
                            console.log(e)
                        }}
                        filterOption={(input: any, option: any) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <p className="send-to-address">r7Gs7wsbwcdfRUjcxC13o9ZczgDRKQqgx4jJZMoeUjfFn7ENs...</p>
                </div>
            </div>
            <p className="send-remark-text">The beneficiary will have access to the transferred fees when the transaction is included in a block.</p>
            {/* Send Amount */}
            <div className="send-amount">
                <div className="amount-msg">
                    <InpTitle title="Amount" desc="Remark Text" />
                    <input type="text" placeholder="Type Amount" />
                </div>
                <Select defaultValue="hemi" style={{ width: '80px' }} bordered={false} optionFilterProp="children">
                    <Option value="hemi">HEMI</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
            </div>
            <p className="send-remark-text">
                If the recipient account is new, the balance needs to be more than the existential deposit. Likewise if the sending
                account balance drops below the same value, the account will be removed from the state.
            </p>
            <div className="send-amount">
                <div className="amount-msg">
                    <InpTitle title="Existential Deposit" desc="Remark Text" />
                    <p>0.001</p>
                </div>
                <p>HEMI</p>
            </div>
            <p className="send-remark-text">
                With the keep-alive option set, the account is protected against removal due to low balances.
            </p>
            <div className="checks-transfer">
                <p>
                    Transfer with account keep-alive checks
                </p>
                <Switch />
            </div>
            <div className="attention-box">
                <IconFont className="iconfont" type="icon-xingxing_star" />
                <p>
                    The transaction, after application of the transfer fees, will drop the available balance below the existential deposit. As such the transfer will fail. The account needs more free funds to cover the transaction fees
                </p>
            </div>
        </div>
    )
};

export default SendStepOne;