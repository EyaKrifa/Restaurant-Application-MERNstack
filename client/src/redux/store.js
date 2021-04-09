import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import loadingReducer from "./reducers/loadingReducers";
import messsageReducer from "./reducers/messageReducers";

const reducer = combineReducers({});
const initialState = {
    loading: loadingReducer,
    messages: messsageReducer,
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
