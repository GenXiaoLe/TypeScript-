import * as React from 'react';
import { Row, Col, Form, Input, Button, Icon } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { FormComponentProps } from 'antd/es/form';

import './index.scss';

interface FieldItem {
    title: string,
}

interface UserFormProps extends FormComponentProps {
    onSearch: (val: any) => void;
    // field: Array<FieldItem>;
    form: WrappedFormUtils;
}

export interface State {
    expand: boolean
}

export class OrderHeader extends React.Component<UserFormProps, State> {
    public constructor(props: UserFormProps) {
        super(props);

        this.state = {
            expand: false
        }
    }

    public handleSearch = (e: any) => {
        e.preventDefault();

        this.props.form.validateFields((err, value) => {
            console.log(value);
        })
    }

    public render() {
        const { expand } = this.state;
        return (
            <section className="page-header__outside">
                <Form onSubmit={this.handleSearch}>
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

    private getFields = () => {
        const count = this.state.expand ? 10 : 6;
        const { getFieldDecorator } = this.props.form;
        const children = [];

        for (let i = 0; i < 10; i++) {
            children.push(
                <Col span={8} key={i} style={{display: i < count ? 'block' : 'none'}} >
                    <Form.Item>
                        {getFieldDecorator(`field-${i}`, {
                            rules: [
                                {
                                    required: true,
                                    message: 'input something!'
                                }
                            ]
                        })(<Input placeholder="placeholder" />)}
                    </Form.Item>
                </Col>
            )
        }
        return children;
    }
}


export default Form.create<UserFormProps>()(OrderHeader);