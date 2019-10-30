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

    searchData = (list: Array<TreeData>, data: TreeData, arr: Array<number>): Array<TreeData> => {
        let treeArr: Array<TreeData> = [];

        list.forEach((item) => {
            if (item.id === data.parent_id && !arr.includes(item.id)) {
                treeArr.push(item);
                arr.push(item.id);
                treeArr = [...treeArr, ...this.searchData(list, item, arr)]
            }
        });

        return treeArr;
    }

    searchTree = (data: Array<TreeData>, val: string): Array<TreeData> => {
        let treeArr: Array<TreeData> = data.filter(i => i.title.includes(val));
        let treeIds: Array<number> = treeArr.map(i => i.id);
        let searchList: Array<TreeData>  = [];

        treeArr.forEach((item: TreeData) => {
            searchList.push(...this.searchData(data, item, treeIds));
        });

        return [...treeArr, ...searchList];
    }

    searchChange = (event: any): void => {
        const _val: string = event.target.value;
        const _treeData: Array<TreeData> = this.searchTree([...this.props.data], _val);

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