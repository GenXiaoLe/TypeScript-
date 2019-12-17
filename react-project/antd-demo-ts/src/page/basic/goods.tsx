import React from 'react';
import { Layout, Row, Col, Menu, Icon, Table, Divider, Tag, Button } from 'antd';

import { goods } from '../../component/tableTh/base';

import LHeader from '../../component/header/lHeader/index';
import THeader from '../../component/header/tHeader/index';
import Tree from '../../component/tree/searchTree';
import SearchDialog from '../../component/dialog/searchDialog';

import './index.css';
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Column, ColumnGroup } = Table;


export interface Props {

}

export interface State {
    data: Array<object>
    tableTh: Array<object>
    visibility: boolean
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
    public constructor(props: Props) {
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
            ],
            visibility: false
        }

        this.btnChange = this.btnChange.bind(this);
        this.save = this.save.bind(this);
        this.cancal = this.cancal.bind(this);
        this.search = this.search.bind(this);
    }

    public btnChange = (name: string) => {
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

    public save = (data: Array<object>) => {

    }

    public cancal = () => {

    }

    public onChange = (data: any):void => {

    }

    public btnOnChange = (data: string):void => {

    }

    public search = () => {
        this.setState({
            visibility: !this.state.visibility
        })
    }

    public render() {
        return(
            <section>
                <Layout>
                    <Header className="goods__header">
                        <LHeader 
                            leftLayout={[
                                <Button key="1" shape="round" className="l-header__btn-defalut" onClick={this.btnOnChange.bind(this, '保存')}>保存</Button>,
                                <Button key="2" shape="round" className="l-header__btn-defalut" onClick={this.btnOnChange.bind(this, '取消')}>取消</Button>
                            ]}
                            rightLayout={[
                                <Button type="primary" title="搜索" onClick={this.search}>搜索</Button> 
                            ]}/>
                    </Header>
                    <Content>
                        <Row>
                            <Col span={4} className="goods-sider">
                                {/* <Tree 
                                    data={[
                                        {id: 1, title: '有下级的货品', parent_id: 0},
                                        {id: 2, title: '货品1', parent_id: 1},
                                        {id: 3, title: '货品2', parent_id: 1},
                                        {id: 4, title: '货品3', parent_id: 1},
                                        {id: 5, title: '无下级的货品', parent_id: 0},
                                        {id: 6, title: '货品1-1', parent_id: 2},
                                        {id: 7, title: '货品1-1-1', parent_id: 6},
                                        {id: 8, title: '货品1-2', parent_id: 2},
                                    ]}/> */}
                            </Col>
                            <Col span={20} className="goods-table">
                                <THeader btnChange={this.btnChange} />
                                <Table
                                    rowSelection={rowSelection}
                                    dataSource={this.state.tableTh}>
                                    {
                                        goods.map((item) => {
                                            return <Column title={item.title} dataIndex={item.dataIndex} key={item.key} ></Column>
                                        })
                                    }
                                </Table>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
                <SearchDialog visibility={this.state.visibility} onChange={this.onChange} />
            </section>
        );
    }
}