import { createStore, applyMiddleware } from "redux";
//引入redux-thunk，用于支持异步action
import thunk from "redux-thunk";

// 引入redux 开发者工具
import { composeWithDevTools } from "redux-devtools-extension";

// 引入所有的reducers
import allReducers from "./reducers";

export default createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
