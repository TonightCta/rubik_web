import React from "react";
import IconFont from "../../../../../components/icon_font";

const AddQR = (): React.ReactElement => {
    return (
        <div className="add-qr">
            <div className="into-box">
                <div className="tool-icon-box">
                    <IconFont className="iconfont" type="icon-youjian" />
                </div>
                <p>Add via Qr</p>
            </div>
        </div>
    )
};

export default AddQR;