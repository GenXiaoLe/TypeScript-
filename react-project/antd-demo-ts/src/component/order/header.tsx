import * as React from 'react';
import { Row, Col, Form, Input, Button, Icon } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { FormComponentProps } from 'antd/es/form';

import './index.scss';

/// FieldItem参数
interface FieldItem {
    name: string;
    CNname: string;
    isRequired?: boolean;
    requiredText?: string;
    span?: number;
    rightRender?: ((data: any) => React.ReactNode);
}

interface UserFormProps extends FormComponentProps {
    onSearch: (val: any) => void;
    field: Array<FieldItem>;
    form: WrappedFormUtils;
    count?: number
    dataSource?: any
}

interface UserFormState {
    expand: boolean
}

export class OrderHeader extends React.Component<UserFormProps, UserFormState> {
    public constructor(props: UserFormProps) {
        super(props);
        
        this.state = {
            expand: false
        }
    }

    public handleSearch = (e: any) => {
        e.preventDefault();

        const { form, onSearch } = this.props;
        form.validateFields((err, value) => {
            onSearch(value);
        });
    }

    public render() {
        const { expand } = this.state;
        return (
            <section className="page-header__outside">
                <Form className="page-header__form" onSubmit={this.handleSearch}>
                    <Row gutter={24}>{this.getFields()}</Row>
                    <Row>
                        <Col span={24} style={{textAlign: 'center'}}>
                            <Button type="primary" htmlType="submit">
                                Search
                            </Button>
                            <Button style={{marginLeft: 10}} onClick={this.reset}>
                                Clear
                            </Button>
                            <a style={{fontSize: 12, marginLeft: 10}} onClick={this.toogle}>
                                {expand ? '收起' : '展示更多内容'}
                                <Icon type={expand ? 'up' : 'down'} />
                            </a>
                        </Col>
                    </Row>
                </Form>
            </section>
        )
    }

    private reset = () => {
        this.props.form.resetFields();
    }

    private toogle = () => {
        const { expand } = this.state;
        this.setState({
            expand: !expand
        });
    }

    private getFields = (): Array<React.ReactNode> => {
        const { form, field, dataSource = {}, count = 4 } = this.props;
        const { getFieldDecorator } = form;
        const _count = this.state.expand ? field.length : count;
        const children: Array<React.ReactNode> = [];

        field.forEach((item: FieldItem, index: number): void => {
            const { name, CNname, span = 6, isRequired = false, requiredText = '请填写必填项' } = item;

            children.push(
                <Col span={span} key={index} style={{display: index < _count ? 'block' : 'none'}} >
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


export default Form.create<UserFormProps>()(OrderHeader);