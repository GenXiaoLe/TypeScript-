import * as React from 'react';
import { Modal } from 'antd';

interface BasicDialogProps {
    visibility: boolean;
    heardTitle?: string;
    onChange: (data: any) => void;
}

export default class BasicDialog extends React.Component<BasicDialogProps> {
    public constructor(props: BasicDialogProps) {
        super(props);
    }

    render() {
        const { visibility, heardTitle = '默认弹窗', onChange, children } = this.props;

        return (
            <Modal
                visible={visibility}
                title={heardTitle}
                onCancel={onChange}
                >
                {children}
            </Modal>
        )
    }
}