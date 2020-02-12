import React, { Fragment } from 'react';
import { Input } from 'antd';

import Tree, { DefaultPropsTree, TreeDataSource } from './tree';

const { Search } = Input;

interface SearchTreeProps {
    /** 渲染树的源数据 */
    data: TreeDataSource[];
    /** 渲染树所需的属性 */
    defaultPropsTree: DefaultPropsTree;
    /** 搜索框默认文字 */
    placeholder?: string;
    /** 点击树后的回调函数 */
    onChange: (selectedKeys: string[]) => void;
    isList?: boolean
}

interface SearchTreeState {
    searchVal: string;
    treeData: TreeDataSource[];
}

export default class SearchTree extends React.Component<SearchTreeProps, SearchTreeState> {
    public constructor(props: SearchTreeProps) {
        super(props);
        const { data, isList = true } = props;

        this.state = {
            searchVal: '',
            treeData: isList ? [...data] : this.formatList([...data]),
        }
    }

    public searchTree = (item: any, data: TreeDataSource[], ids: number[]): TreeDataSource[] => {
        const { defaultPropsTree } = this.props;
        let treeArray: TreeDataSource[] = [];
        data.forEach((i: any) => {
            if (i[defaultPropsTree.id] === item.parentId && !ids.includes(i[defaultPropsTree.id])) {
                ids.push(i[defaultPropsTree.id]);
                treeArray.push(...[i, ...this.searchTree(i, data, ids)]);
            }
        });

        return treeArray;
    }

    public searchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { defaultPropsTree, data } = this.props;
        const _val: string = event.target.value;
        const treeArray: TreeDataSource[] = data.filter(i => i[defaultPropsTree.CNname].includes(_val));
        const treeIds: number[] = treeArray.map(i => i[defaultPropsTree.id]);
        const parentArray: TreeDataSource[] = [];

        treeArray.forEach((item: TreeDataSource) => {
            parentArray.push(...this.searchTree(item, data, treeIds));
        });
        
        this.setState({
            searchVal: _val,
            treeData: [...treeArray, ...parentArray]
        })
    }

    public formatList = (items: TreeDataSource[]): TreeDataSource[] => {
        let result: TreeDataSource[] = [];

        items.forEach((item: TreeDataSource) => {
            result.push(item);
            if (item.children && item.children.length) {
                result.push(...this.formatList(item.children));
            }
            delete item.children;
        })

        return result;
    }


    public render() {
        const { placeholder = '请输入关键字', onChange, defaultPropsTree } = this.props;
        const { treeData } = this.state;

        return (
            <Fragment>
                <Search placeholder={placeholder} onChange={this.searchChange} className="tree__search-input" />
                <Tree dataSource={treeData} onChange={onChange} defaultPropsTree={defaultPropsTree} />
            </Fragment>
        )
    }
}
