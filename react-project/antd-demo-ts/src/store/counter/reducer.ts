import { ActionType, getType } from 'typesafe-actions';

import * as actions from './action';

type Action = ActionType<typeof actions>;

export interface CounterState {
    value: number
}

const initState = {
    value: 0
}

export const counterReducer = (
    state: CounterState = initState,
    action: Action
): CounterState => {
    switch(action.type) {
        case getType(actions.insrease): 
            return Object.assign({}, state, { value: state.value + 1 });
        case getType(actions.decrease): 
            return Object.assign({}, state, { value: state.value - 1 });
        default:
            return state;
    }
}