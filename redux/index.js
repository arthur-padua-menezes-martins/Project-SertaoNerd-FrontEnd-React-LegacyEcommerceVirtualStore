import { createStore, applyMiddleware } from 'redux'
import { createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk'
import reducers from './reducers'

const makeStore = (initialState = {}) => createStore(reducers, initialState, applyMiddleware(thunk))

export const store = createStore(reducers, {}, applyMiddleware(thunk))
export const wrapper = createWrapper(makeStore, { debug: true })