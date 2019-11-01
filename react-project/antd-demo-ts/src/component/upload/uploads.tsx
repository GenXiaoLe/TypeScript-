import * as React from 'react';
import { Layout, Button, Icon } from 'antd';

import Upload from './index';

const { Header, Content } = Layout;

interface UploadBtnProps {
    action: string
    onChange: (data: any) => void
    headers?: any,
    placeholder?: string
    title?: string
    uploadType?: string,
    type?: number
}

export default class UploadBtn extends React.Component<UploadBtnProps> {
    constructor(props: UploadBtnProps) {
        super(props);
    }

    render() {
        const { action, onChange, placeholder = '支持常见的文件格式, 最大支持15M', headers = {}, title = '上传附件', uploadType = 'file', type = 1 } = this.props;

        return (
            <section>
                <Upload
                    uploadType={uploadType}
                    action={action}
                    headers={headers}
                    onChange={onChange}>
                    {
                        type === 1 && (<section>
                            <Button style={{marginRight: 10, color: '#fff', background: '#307bd8'}}>
                                <Icon type='cloud-upload' />
                                {title}
                            </Button>
                            {placeholder}
                        </section>)
                    }
                    {
                        type === 2 && (<section>
                            <Button style={{padding: 0, color: '#307bd8', background: '#fbfdff', width: 30, height: 30}}>
                                <Icon type='plus' />
                            </Button>
                        </section>)
                    }
                </Upload>
            </section>
        )
    }
}