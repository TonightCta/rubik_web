import React, { ReactNode } from "react";
import AddQR from "./add_qr";
import AddAccount from "./add_account";
import EditJson from "./edit_json";
import './_tool_base.scss'

const AccountTools = (): React.ReactElement<ReactNode> => {
    return (
        <div className="account-tools">
            <AddAccount />
            <EditJson />
            <AddQR />
        </div>
    )
};

export default AccountTools;