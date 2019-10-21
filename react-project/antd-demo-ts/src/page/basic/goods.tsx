import React from 'react';
import { Layout, Row, Col, Menu, Icon } from 'antd';

import LHeader from '../../component/header/lHeader.tsx';
import Tree from '../../component/tree/tree';
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
                            <Tree data={[
                                {id: 1, name: '有下级的货品', parent_id: 0, icon: 'laptop'},
                                {id: 2, name: '货品1', parent_id: 1},
                                {id: 3, name: '货品2', parent_id: 1},
                                {id: 4, name: '货品3', parent_id: 1},
                            ]}/>
                        </Col>
                        <Col span={20}>
                            table
                        </Col>
                    </Row>
                </Content>
            </section>
        );
    }
}