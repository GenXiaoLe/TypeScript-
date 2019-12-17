import { createAction } from 'typesafe-actions';

import { INCREASE, DECREASE } from './constant';


export const insrease = createAction(INCREASE);
export const decrease = createAction(DECREASE);