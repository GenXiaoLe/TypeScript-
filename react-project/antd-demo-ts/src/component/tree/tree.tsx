import * as React from 'react';
import { Layout, Row, Col, Menu, Icon } from 'antd';

import { Route, Switch, Link } from 'react-router-dom';

import './tree.css';

const { SubMenu } = Menu;

export interface Props {
    data: Array<any>
}

export interface State {
    treeData: Array<any>
    loading: boolean
}

export default class Tree extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            treeData: [],
            loading: true
        }

        this.createTree = this.createTree.bind(this);
    }

    createTree = (data: Array<any>, id: number = 0, attribute: string = 'parent_id'): Array<Object> => {
        return data
            .filter((item: any, index: number) => id === item[attribute])
            .map(item => {
                return {...item, children: this.createTree(data, item.id)};
            });
    }

    componentDidMount() {
        const { data } = this.props;

        this.setState({
            treeData: [...this.state.treeData, ...this.createTree(data)],
            loading: false
        })
    }

    render() {
        if (this.state.loading) return null;
        return(
            <section>
                <Menu
                mode="inline"
                style={{ height: '100%', borderRight: 0 }}>
                    {this.state.treeData.map((item, index) => {
                        return <SubMenu
                            key={ item.id }
                            title={<span><Icon type={item.icon} />{item.name}</span>}>
                                {item.children.length ? item.children.map((m: any) => {
                                    return <Menu.Item key={ m.id }>{ m.link ? <Link to={m.link}>{m.name}</Link> : m.name}</Menu.Item>}) : null }
                        </SubMenu>
                    })}
                </Menu>
            </section>
        )
    }
}

