import { combineReducers } from "redux"
import { postsReducer } from "./postsReducer"
import { loginReducer } from "./loginReducer"
import { postFileDataReducer } from "./postFileDataReducer"

export default combineReducers({
  post: postsReducer,
  user: loginReducer,
  json_data: postFileDataReducer,
})
