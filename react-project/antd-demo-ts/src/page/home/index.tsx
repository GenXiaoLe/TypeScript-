import React from 'react';
import { Layout, Row, Col, Menu, Icon, Table, Divider, Tag } from 'antd';

import { buyList, buy } from '../../component/tableTh/home';

import LHeader from '../../component/header/lHeader.tsx';
import Tree from '../../component/tree/tree';

import './index.css';
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

export interface State {
    data: Array<object>
    tableTh: Array<object>
}

export interface Props {

}

export default class Home extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {
            data: [],
            tableTh: [
                {
                    key: 1,
                    time: '2019-10-23',
                    serial: '001',
                    supilerName: '老王',
                    userName: 'jack'
                },
                {
                    key: 2,
                    time: '2019-10-24',
                    serial: '002',
                    supilerName: '老王',
                    userName: 'rose'
                },
            ]
        };

        this.btnChange = this.btnChange.bind(this);
    }

    btnChange = (name: string) => {
        console.log(name);
    }

    render() {
        return(
            <section>
                <Layout>
                    <Header className="t-header">
                        <LHeader btnChange={this.btnChange} btns={['导出', '导入']} />
                    </Header>
                    <Content>
                        <Table
                            columns={buyList}
                            dataSource={this.state.tableTh}>
                        </Table>
                    </Content>
                </Layout>
            </section>
        )
    }
}