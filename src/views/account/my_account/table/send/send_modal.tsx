import React, { ReactNode, useImperativeHandle, useState, useEffect } from "react";
import { Modal } from "antd";
import IconFont from "../../../../../components/icon_font";
import SendStepOne from './step/send_step_one';
import SendStepTwo from './step/send_step_two';
import './send_modal.scss';

interface Props {
    id: string,
    getSendMsg: Function
}

const SendHBox = React.forwardRef((props: Props, ref: any): React.ReactElement<ReactNode> => {

    const [sendBoxStatus, setSendBoxStatus] = useState<boolean>(false);
    const [sendStep, setSendStep] = useState<number>(1)

    useEffect((): void => {
        !sendBoxStatus && setSendStep(1)
    }, [sendBoxStatus])

    const SendModalTool = (): React.ReactElement => {
        return (
            <div className="footer-tool">
                <p key="cancel" onClick={(): void => {
                    setSendBoxStatus(false);
                }}>
                    <IconFont className="iconfont" type="icon-guanbi-xiao_close-small" />
                    Cancel
                </p>
                {
                    sendStep == 1 ? <p key="make" onClick={(): void => {
                            setSendStep(2);
                        }}>
                            <IconFont className="iconfont" type="icon-you_right" />
                            Make ransfer
                        </p>
                        :
                        <p key="down" onClick={(): void => {
                            setSendBoxStatus(false);
                        }}>
                            <IconFont className="iconfont" type="icon-xingxing_star" />
                            Down
                        </p>
                }
            </div>
        )
    }
    useImperativeHandle(ref, () => ({
        emitSetSendBox: setSendBoxStatus
    }))
    return (
        <Modal width="914px" title="Send HEIM" footer={<SendModalTool />} visible={sendBoxStatus} onCancel={(): void => {
            setSendBoxStatus(false)
        }}>
            {
                [
                    sendStep == 1 && <SendStepOne key={1}/>,
                    sendStep == 2 && <SendStepTwo key={2}/>,
                ]
            }
        </Modal>
    )
});

export default SendHBox;