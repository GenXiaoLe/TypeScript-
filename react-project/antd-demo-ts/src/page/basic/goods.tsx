import React from 'react';
import { Layout, Row, Col, Menu, Icon, Table, Divider, Tag } from 'antd';

import { goods } from '../../component/tableTh/base';

import LHeader from '../../component/header/lHeader/index';
import THeader from '../../component/header/tHeader/index';
import Tree from '../../component/tree/searchTree';

import './index.css';
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

// export namespace Goods {
//     export interface Props {

//     }

//     export interface State {
//         data: Array<object>
//     }
// }

export interface Props {

}

export interface State {
    data: Array<object>
    tableTh: Array<object>
}

const rowSelection: object = {
    onChange: (selectKey: number, selectItem: any) => {
        console.log(selectKey, selectItem);
    },
    getCheckboxProps: (record: any) => ({
        disabled: record.goodName === 'rose',
        name: record.goodName
    })
}

export default class Goods extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            data: [],
            tableTh: [
                {
                    key: 1,
                    goodSerial: '001',
                    goodName: 'jack',
                    unit: 'kg'
                },
                {
                    key: 2,
                    goodSerial: '002',
                    goodName: 'rose',
                    unit: 'kg'
                }
            ]
        }

        this.btnChange = this.btnChange.bind(this);
        this.save = this.save.bind(this);
        this.cancal = this.cancal.bind(this);
    }

    btnChange = (name: string) => {
        console.log(name);
        switch(name) {
            case '保存':
                this.save(this.state.data);
            break;
            case '取消':
                this.cancal();
            break;
        }
    }

    save = (data: Array<object>) => {

    }

    cancal = () => {

    }

    render() {
        return(
            <section>
                <Layout>
                    <Header className="goods__header">
                        <LHeader btnChange={this.btnChange} btns={['导出', '导入']} />
                    </Header>
                    <Content>
                        <Row>
                            <Col span={4} className="goods-sider">
                                <Tree 
                                    data={[
                                        {id: 1, title: '有下级的货品', parent_id: 0},
                                        {id: 2, title: '货品1', parent_id: 1},
                                        {id: 3, title: '货品2', parent_id: 1},
                                        {id: 4, title: '货品3', parent_id: 1},
                                        {id: 5, title: '无下级的货品', parent_id: 0},
                                        {id: 6, title: '货品1-1', parent_id: 2},
                                        {id: 7, title: '货品1-1-1', parent_id: 6},
                                        {id: 8, title: '货品1-2', parent_id: 2},

                                    ]}/>
                            </Col>
                            <Col span={20} className="goods-table">
                                <THeader btnChange={this.btnChange} />
                                <Table
                                    rowSelection={rowSelection}
                                    columns={goods}
                                    dataSource={this.state.tableTh}></Table>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </section>
        );
    }
}