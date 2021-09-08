import { combineReducers } from "redux"
import { postsReducer } from "./postsReducer"
import { loginReducer } from "./loginReducer"

export default combineReducers({
  post: postsReducer,
  user: loginReducer,
})
