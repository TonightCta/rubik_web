import React, { ReactNode } from "react";
import AccountTools from "./tools";
import AccountTable from "./table";
import './index.scss'

const MyAccount = (): React.ReactElement<ReactNode> => {
    return (
        <div className="my-account">
            {/* 工具栏 */}
            <AccountTools />
            {/* 账户说明 */}
            <div className="account-remark-box">
                <p>
                    It is recommended that you create/store your accounts securely and externally from the app. On Chrome the following browser extensions are available for use -
                    Accounts injected from any of these extensions will appear in this application and be available for use. The above list is updated as more extensions with external signing capability become available. Learn more...
                </p>
                <p>
                    metalink-js extension(Basic account injection and signer)
                </p>
                <p>
                    Since some extensions, such as the metalink-js extension, protects you against all community reported phishing sites, there are valid reasons to use them for additional protection, even if you are not storing accounts in it.
                </p>
            </div>
            {/* 账户列表 */}
            <AccountTable/>
        </div>
    )
};

export default MyAccount;