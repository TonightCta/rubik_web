import React from "react";
import IconFont from "../../../../../components/icon_font";

const AddAccount = (): React.ReactElement => {
    return (
        <div className="add-account">
            <div className="into-box">
                <div className="tool-icon-box">
                    <IconFont className="iconfont" type="icon-xingxing_star" />
                </div>
                <p>Add Account</p>
            </div>
        </div>
    )
};

export default AddAccount;