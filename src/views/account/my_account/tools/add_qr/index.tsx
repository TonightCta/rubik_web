import React, { ReactNode, useState } from "react";
import IconFont from "../../../../../components/icon_font";
import { Modal } from "antd";
import './index.scss'
const AddQR = (): React.ReactElement => {

    const [QRModalStatus, setQRModalStatus] = useState<boolean>(false);

    const QRModalTool = (): React.ReactElement => {
        return (
            <div className="footer-tool">
                <p key="cancel" onClick={() : void => {
                    setQRModalStatus(false)
                }}>
                    <IconFont className="iconfont" type="icon-guanbi-xiao_close-small" />
                    Cancel
                </p>
                <p key="save">
                    <IconFont className="iconfont" type="icon-weibo" />
                    Save
                </p>
            </div>
        )
    }

    const QRModal = (): React.ReactElement<ReactNode> => {
        return (
            <Modal width="914px" title="Add account via Qr" visible={QRModalStatus} footer={<QRModalTool />} onCancel={(): void => {
                setQRModalStatus(false);
            }}>
                <div className="qr-modal-content">
                    <div className="qr-box"></div>
                </div>
                <p className="qr-box-remark">
                    Provide the account QR from the module/external application for scanning.
                </p>
                <p className="qr-box-remark">
                    Once detected as valid, you will be taken to the next step to add the account to your list.
                </p>
            </Modal>
        )
    }
    return (
        <div className="add-qr">
            <div className="into-box" onClick={(): void => {
                setQRModalStatus(true);
            }}>
                <div className="tool-icon-box">
                    <IconFont className="iconfont" type="icon-youjian" />
                </div>
                <p>Add via Qr</p>
            </div>
            <QRModal />
        </div>
    )
};

export default AddQR;