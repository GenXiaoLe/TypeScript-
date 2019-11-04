import * as React from 'react';
import { Row, Col, Form, Button, Icon, Card } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

interface FieldItem {
    name: string;
    CNname: string;
    isRequired?: boolean;
    requiredText?: string;
    span?: number;
    rightRender?: ((data: any) => React.ReactNode);
}

interface FieldsProps {
    field: Array<FieldItem>;
    form: WrappedFormUtils;
    count: number
    dataSource?: any
}

interface FieldsState {

}

export default class Fields extends React.Component<FieldsProps, FieldsState> {
    public constructor(props: FieldsProps) {
        super(props);

        this.createField = this.createField.bind(this);
    }

    public render() {
        return (
            <Row gutter={24}>{this.createField()}</Row>
        )
    }

    private createField = (): Array<React.ReactNode> => {
        const { form, field, dataSource = {}, count = 4 } = this.props;
        const { getFieldDecorator } = form;
        const children: Array<React.ReactNode> = [];


        field.forEach((item: FieldItem, index: number): void => {
            const { name, CNname, span = 6, isRequired = false, requiredText = '请填写必填项' } = item;

            children.push(
                <Col span={span} key={index} style={{display: index < count ? 'block' : 'none'}} >
                    <Form.Item label={`${CNname}：`}>
                        {getFieldDecorator(name, {
                            rules: [
                                {
                                    required: isRequired,
                                    message: requiredText
                                }
                            ],
                            initialValue: dataSource[name] || ''
                        })(
                            item.rightRender ?
                                item.rightRender(item) :
                                <span>{dataSource[name]}</span>
                        )}
                    </Form.Item>
                </Col>
            )
        })
        return children;
    }
}