import React from "react";
import IconFont from "../../../../../components/icon_font";

const EditJson = (): React.ReactElement => {
    return (
        <div className="edit-json">
            <div className="into-box">
                <div className="tool-icon-box">
                    <IconFont className="iconfont" type="icon-lianjie" />
                </div>
                <p>Restore JSON</p>
            </div>
        </div>
    )
};

export default EditJson;