import { combineReducers } from "redux"
import { postsReducer } from "./postsReducer"
import { loginReducer } from "./loginReducer"
import { postFileDataReducer } from "./postFileDataReducer"
import { selectorsReducer } from "./selectorsReducer"

export default combineReducers({
  post: postsReducer,
  user: loginReducer,
  json_data: postFileDataReducer,
  selector: selectorsReducer,
})
