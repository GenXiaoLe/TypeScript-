import * as React from 'react';
import { Icon, Tree as AntTree } from 'antd';

import './tree.css';

const { TreeNode } = AntTree;

export interface Props {
    data: Array<any>
    isListData?: boolean
}

export interface State {
    loading: boolean
}

export default class Tree extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            loading: true,
        }

        this.createTree = this.createTree.bind(this);
    }

    createTree = (data: Array<any>, id: number = 0, attribute: string = 'parent_id'): Array<any> => {
        return data
            .filter((item: any, index: number) => id === item[attribute])
            .map(item => {
                return {...item, children: this.createTree(data, item.id)};
            });
    }

    renderTreeNodes = (data: Array<any>) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <TreeNode title={item.title} key={item.id} dataRef={item}>
                        {this.renderTreeNodes(item.children)}
                    </TreeNode>
                )
            }

            return <TreeNode title={item.title} key={item.id} {...item}></TreeNode>
        })
    }
    

    componentDidMount() {
        this.setState({
            loading: false
        })
    }

    render() {
        const { loading } = this.state;
        const { data, isListData = true } = this.props;

        if (loading) return null;
        const _tree: Array<any> =  isListData ? this.createTree(data) : data;
        
        return(
            <section>
                <AntTree>
                    {this.renderTreeNodes(_tree)}
                </AntTree>
            </section>
        )
    }
}

