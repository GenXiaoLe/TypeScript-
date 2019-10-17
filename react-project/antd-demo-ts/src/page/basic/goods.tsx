import React from 'react';
import { Layout, Row, Col, Menu, Icon } from 'antd';

import LHeader from '../../component/header/lHeader.tsx';
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
}

export default class Goods extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            data: []
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
                <Header>
                    <LHeader btnChange={this.btnChange} btns={['导出', '导入']} />
                </Header>
                {/* <Content>
                    <Sider>
                    </Sider>
                    <Content>
                    </Content>
                </Content> */}
                <Content>
                    <Row>
                        <Col span={4}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}>
                                <Menu.Item key="1">全部</Menu.Item>
                                <SubMenu
                                    key="2"
                                    title={<span>
                                    <Icon type="laptop" />
                                    有下级的货品
                                    </span>}>
                                    <Menu.Item key="5">货品1</Menu.Item>
                                    <Menu.Item key="6">货品2</Menu.Item>
                                    <Menu.Item key="7">货品3</Menu.Item>
                                    <Menu.Item key="8">货品4</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Col>
                        <Col span={20}>
                        </Col>
                    </Row>
                </Content>
            </section>
        );
    }
}