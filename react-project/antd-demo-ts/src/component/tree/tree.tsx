import * as React from 'react';

import './tree.css';


export namespace Tree {
    export interface Props {
        data: Array<object>
    }

    export interface State {
        treeData: Array<object>
    }
}

export class Tree extends React.Component<Tree.Props, Tree.State> {
    constructor(props: Tree.Props) {
        super(props);

        this.state = {
            treeData: [...this.props.data]
        }

        this.linkTo = this.linkTo.bind(this);
        this.createTree = this.createTree.bind(this);
    }

    linkTo = () => {

    }

    createTree = (data: Array<object>, id?: number, attribute = 'parent_id') => {
        // this.state.treeData = data
        //     .filter(item => id === item[attribute])
        //     .map(item => ({...item, children: this.createTree(data, item.id)}));
    }

    componentDidMount() {
        this.createTree(this.state.treeData);
    }

    render() {
        return(
            <section>

            </section>
        )
    }
}

