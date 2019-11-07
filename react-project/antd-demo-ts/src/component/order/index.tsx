import * as React from 'react';
import { Row, Col, Form } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

// FieldItem参数
/**
 * @name {string} 属性名
 * @CNname {string} 属性中文名
 **/
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

export default class Fields extends React.Component<FieldsProps> {
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