import * as React from 'react';
import { Row, Col, Form, Button, Icon, Card } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { FormComponentProps } from 'antd/es/form';

import Field from './index';

import './index.scss';

// FieldItem参数
/**
 * @name {string} 属性名
 * @CNname {string} 属性中文名
 **/
interface UserFormProps extends FormComponentProps {
    onSearch: (val: any) => void;
    field: Array<any>;
    form: WrappedFormUtils;
    count?: number
    dataSource?: any
    hasBtn?: boolean
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
        const { field, form, count = 4, dataSource = {}, hasBtn = true } = this.props;
        const _count = this.state.expand ? field.length : count;

        return (
            <Card className="page-header__outside">
                <Form className="page-order__form" onSubmit={this.handleSearch}>
                    <Field field={field} form={form} count={_count} dataSource={dataSource} />
                    <Row>
                        <Col span={24} style={{textAlign: 'center'}}>
                            {hasBtn ? [
                                <Button key={1} type="primary" htmlType="submit">
                                    筛选
                                </Button>,
                                <Button key={2} style={{marginLeft: 10}} onClick={this.reset}>
                                    重置
                                </Button>
                            ] : null}
                            
                            <a style={{fontSize: 12, marginLeft: 10}} onClick={this.toogle}>
                                {expand ? '收起' : '展示更多内容'}
                                <Icon type={expand ? 'up' : 'down'} />
                            </a>
                        </Col>
                    </Row>
                </Form>
            </Card>
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
}


export default Form.create<UserFormProps>()(OrderHeader);