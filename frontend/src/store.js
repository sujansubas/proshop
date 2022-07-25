import {
  combineReducers,
  configureStore,
  applyMiddleware,
} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productDetailReducer,
  productListReducer,
} from './reducers/productReducer'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
})

const initialState = {}
const middleware = [thunk]
const middlewareEnhancer = applyMiddleware(...middleware)
const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers)

const store = configureStore({
  reducer,
  initialState,
  composedEnhancers,
})

export default store
