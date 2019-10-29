import * as React from 'react';

import { Input } from 'antd';

import Tree from './tree';

const { Search } = Input;

export interface Props {
    data: Array<TreeData>
    placeholder?: string
}

export interface State {
    searchVal: string,
    treeData: Array<TreeData>
    loading: boolean
}

export interface TreeData {
    id: number,
    title: string,
    parent_id: number
}

export default class SearchTree extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            searchVal: '',
            treeData: [],
            loading: true
        }

        this.searchChange = this.searchChange.bind(this);
    }

    searchTree = (data: Array<TreeData>, val: string): Array<TreeData> => {
        return data.filter(i => i.title.includes(val));

        // return data.map(i => {
            
        // });
    }

    searchChange = (event: any): void => {
        const _val: string = event.target.value;
        const _treeData: Array<TreeData> = this.searchTree(this.state.treeData, _val);

        this.setState({
            searchVal: event.target.value,
            treeData: _treeData
        })
    }

    componentDidMount() {
        this.setState({
            treeData: [...this.props.data],
            loading: false
        })
    }

    render() {
        const { placeholder = "请输入关键字" } = this.props; 
        const { treeData, loading } = this.state;

        if (loading) return null;

        return (
            <section>
                <Search placeholder={placeholder} onChange={this.searchChange} className="search-tree__search-input" />
                <Tree data={treeData} />
            </section>
        )
    }
}