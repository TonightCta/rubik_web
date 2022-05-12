import React, { useState } from "react";
import IconFont from "../../../../../components/icon_font";
import './index.scss';
import { Modal, Tooltip } from "antd";

interface Props {
    title: string,
    desc: string
};

const EditJson = (): React.ReactElement => {

    const [editJson, setEditJson] = useState<boolean>(false);

    const EditModalTool = (): React.ReactElement => {
        return (
            <div className="footer-tool">
                <p key="cancel" onClick={(): void => {
                    setEditJson(false)
                }}>
                    <IconFont className="iconfont" type="icon-guanbi-xiao_close-small" />
                    Cancel
                </p>
                <p key="save">
                    <IconFont className="iconfont" type="icon-sousuo_search" />
                    Restore
                </p>
            </div>
        )
    }

    const FormTitle = (props: Props): React.ReactElement => {
        return (
            <div className="public-title">
                <p>{props.title}</p>
                <Tooltip placement="top" title={props.desc}>
                    <IconFont className="iconfont" type="icon-weibo" />
                </Tooltip>
            </div>
        )
    }

    const EditJsonModal = (): React.ReactElement => {
        return (
            <Modal width="914px" footer={<EditModalTool />} visible={editJson} title="Add via backup file" onCancel={(): void => {
                setEditJson(false)
            }}>
                <div className="edit-json-content">
                    <p>5xxxxx…xxxxxx</p>
                    <div className="edit-inp-box">
                        <FormTitle title="Backup File" desc="Remark Text" />
                        <div className="up-file-box">
                            <input type="file" accept=".json" />
                            <p className="file-mask">
                                click to select or drag and drop the file here
                            </p>
                        </div>
                    </div>
                    <p className="edit-modal-remark m-b-30">
                        Supply a backed-up JSON file, encrypted with your account-specific password.
                    </p>
                    <div className="edit-inp-box">
                        <FormTitle title="Password" desc="Remark Text" />
                        <input type="password" placeholder="Enter Password" />
                    </div>
                    <p className="edit-modal-remark">
                        The password previously used to encrypt this account.
                    </p>
                    <div className="attention-box">
                        <IconFont className="iconfont" type="icon-xingxing_star" />
                        <p>
                            Consider storing your account in a signer such as a browser extension, hardware device, QR-capable phone wallet (non-connected) or desktop application for optimal account security. Future versions of the web-only interface will drop support for non-external accounts, much like the IPFS version.
                        </p>
                    </div>
                </div>
            </Modal>
        )
    }

    return (
        <div className="edit-json">
            <div className="into-box" onClick={(): void => {
                setEditJson(true)
            }}>
                <div className="tool-icon-box">
                    <IconFont className="iconfont" type="icon-lianjie" />
                </div>
                <p>Restore JSON</p>
            </div>
            <EditJsonModal />
        </div>
    )
};

export default EditJson;