import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import loadingReducer from "./reducers/loadingReducers";
import messsageReducer from "./reducers/messageReducers";
import categoryReducer from "./reducers/categoryReducers";
import productReducer from './reducers/productReducers';


const reducer = combineReducers({
       loading: loadingReducer,
       messages: messsageReducer,
       categories: categoryReducer,
       products: productReducer,

});
const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
