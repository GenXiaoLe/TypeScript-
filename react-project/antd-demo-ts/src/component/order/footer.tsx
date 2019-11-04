import * as React from 'react';
import { Card, Form } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { FormComponentProps } from 'antd/es/form';

import Field from './index';

import './index.scss';

interface FooterProps extends FormComponentProps {
    field: Array<any>;
    form: WrappedFormUtils;
    dataSource?: any
}


export class OrderFooter extends React.Component<FooterProps, {}> {
    constructor(props: FooterProps) {
        super(props);
    }

    render() {
        const { field, form, dataSource = {} } = this.props;

        return (
            <Card className="page-footer__outside">
                <Form className="page-order__form">
                    <Field field={field} form={form} count={field.length} dataSource={dataSource} />
                </Form>
            </Card>
        )
    }
}

export default Form.create<FooterProps>()(OrderFooter);