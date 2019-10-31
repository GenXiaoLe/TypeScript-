import React from 'react';
import { Layout, Row, Col, Menu, Icon, Table, Divider, Tag } from 'antd';

import { buyList, buy } from '../../component/tableTh/home';

import LHeader from '../../component/header/lHeader';
import OrderHeader from '../../component/order/header';


import './index.css';
import { Link } from 'react-router-dom';
const { Header, Content, Sider } = Layout;
const { Column, ColumnGroup } = Table;

export interface State {
    data: Array<object>
    tableTh: Array<object>
}

export interface Props {

}

export default class Home extends React.Component<Props, State>{
    public constructor(props: Props) {
        super(props);

        this.state = {
            data: [],
            tableTh: [
                {
                    key: 1,
                    time: '2019-10-23',
                    serial: '001',
                    supilerName: '老王',
                    userName: 'jack',
                    id: 1
                },
                {
                    key: 2,
                    time: '2019-10-24',
                    serial: '002',
                    supilerName: '老王',
                    userName: 'rose',
                    id: 2
                },
            ]
        };

        this.btnChange = this.btnChange.bind(this);
    }

    public btnChange = (name: string) => {
        console.log(name);
    }

    public render() {
        return(
            <section>
                <Layout>
                    <Header className="t-header">
                        <LHeader btnChange={this.btnChange} btns={['导出', '导入']} />
                    </Header>
                    <Content>
                        <Row>
                            <OrderHeader></OrderHeader>
                        </Row>

                        <Table
                            dataSource={this.state.tableTh}>
                            {
                                buyList.map((item) => {
                                    return <Column title={item.title} dataIndex={item.dataIndex} key={item.key} ></Column>
                                })
                            }
                        </Table>
                    </Content>
                </Layout>
            </section>
        )
    }
}