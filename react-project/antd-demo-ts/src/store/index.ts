import { createStore, combineReducers } from 'redux';

import { counterReducer, CounterState } from './counter/reducer';

import * as counterActions  from './counter/action';

const RootRedurces = combineReducers({
    counterReducer
});

export type RootState = {
    counter: CounterState
}

export const rootActions = {
    ...counterActions
}

const createInitStore = (initState?: RootState) => {
    return createStore(RootRedurces, initState);
}

const Store = createInitStore();

export default Store;