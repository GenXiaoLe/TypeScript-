import * as React from 'react';
import { ActionType } from 'typesafe-actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import { Button } from 'antd';
import { RootState, rootActions } from '../../../store';

export interface CounterProps {
    value?: number;
    onIncreaseClick?: () => void;
    onDecreaseClick?: () => void;
    counterReducer?: any,
    dispatch?: any,
}

const Count = class CountBasic extends React.Component<CounterProps>{
    constructor(props: CounterProps) {
        super(props);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    add = () => {
        this.props.dispatch(rootActions.insrease());
    }

    remove = () => {
        this.props.dispatch(rootActions.decrease());
    }

    render() {
        return (
            <div>
                <p>You clicked {this.props.counterReducer.value} times</p>
                <Button onClick={this.add}>+</Button>
                <Button onClick={this.remove}>-</Button>
            </div>
        )
    }
}

type Action = ActionType<typeof rootActions>;

// const mapState = (state: RootState) => ({
//     value: state.counter.value
// })

// const mapProps = (dispatch: Dispatch<Action>) => bindActionCreators({
//     onIncreaseClick: () => rootActions.insrease(),
//     onDecreaseClick: () => rootActions.decrease(),
// }, dispatch);


export default connect(state => state)(Count);