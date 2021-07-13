import { combineReducers } from "redux";
import BatReducer from "./bat/batReducer";
import BallReducer from "./ball/ballReducer";
import TodoReducer from "./todo/todoReducer";
console.log("root Reducer");
// merged store
const rootReducer = combineReducers({
    Ball: BallReducer,
    Bat: BatReducer,
    Todo: TodoReducer
});
export default rootReducer;