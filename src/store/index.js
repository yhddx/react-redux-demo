import { createStore } from "redux";
import { reducer } from "../reducer";

//导入自己创建好的reducer
const store = createStore(reducer);

export default store;