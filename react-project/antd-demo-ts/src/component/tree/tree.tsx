import React from 'react';
import { Tree as AntTree } from 'antd';
import SearchTree from './searchTree';

const { TreeNode } = AntTree;

export interface DefaultPropsTree {
    /** 子元素递归id依据字段, 例如: goodsId, id, companyId */
    id: string;
    /** 节点显示的名称 */
    CNname: string;
}

export interface TreeDataSource {
    parentId: number;
    [key: string]: any
}

interface TreeProps {
    dataSource: TreeDataSource[];
    defaultPropsTree: DefaultPropsTree;
    onChange: (selectedKeys: string[]) => void;
    isList?: boolean
} 

export default class Tree extends React.Component<TreeProps, {}> {
    public static SearchTree: typeof SearchTree;
    public static DefaultPropsTree: DefaultPropsTree;
    public static TreeDataSource: TreeDataSource;

    public constructor(props: TreeProps) {
        super(props);
    }

    // 树状循环
    public treeDataFn = (list: TreeDataSource[], parentId: number) => {
        let items: any[] = [];
        for (let i = 0; i < list.length; i++) {
            let key = list[i].parentId;
            if (items[key]) {
                items[key].push(list[i]);
            } else {
                items[key] = [];
                items[key].push(list[i]);
            }
        }
        return this.formatTree(items, parentId);
    }

    // 格式化数据
    public formatTree = (items: any[], parentId: number) => {
        const { defaultPropsTree } = this.props;
        let result: any[] = [];
        if (!items[parentId]) {
            return result;
        }
        for (let t of items[parentId]) {
            t.children = this.formatTree(items, t[defaultPropsTree.id]);
            result.push(t);
        }
        return result;
    }

    public renderTreeNodes = (data: TreeDataSource[]): Array<React.ReactNode> => {
        const { defaultPropsTree } = this.props;

        return data.map((item: TreeDataSource) => {
            if (item.children) {
                return (
                    <TreeNode title={item[defaultPropsTree.CNname]} key={item[defaultPropsTree.id]} dataRef={item}>
                        {this.renderTreeNodes(item.children)}
                    </TreeNode>
                )
            }

            return <TreeNode title={item[defaultPropsTree.CNname]} key={item[defaultPropsTree.id]} {...item} />
        });
    }

    public render() {
        const { dataSource, onChange, isList = true } = this.props;
        let _tree: TreeDataSource[] = isList ? this.treeDataFn(dataSource, 0) : dataSource;

        return (
            <AntTree
                onSelect={onChange}>
                {this.renderTreeNodes(_tree)}
            </AntTree>
        )
    }
}
