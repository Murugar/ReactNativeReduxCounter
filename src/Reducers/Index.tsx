import {CounterReducer} from '../Reducers/Counter'
import { combineReducers } from 'redux';

export const Reducer =combineReducers({
    CounterReducer:CounterReducer
})
