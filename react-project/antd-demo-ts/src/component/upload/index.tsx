import * as React from 'react';
import { Layout, Upload as AntUpload } from 'antd';

interface UploadBtnProps {
    action: string
    onChange: (data: any) => void
    headers?: any,
    uploadType?: string
}

export default class Upload extends React.Component<UploadBtnProps> {
    constructor(props: UploadBtnProps) {
        super(props);
    }

    render() {
        const { action, onChange, headers = {}, uploadType = 'file', children } = this.props;

        return (
            <section>
                <AntUpload
                    name={uploadType}
                    action={action}
                    headers={headers}
                    onChange={onChange}>
                    {children}
                </AntUpload>
            </section>
        )
    }
}