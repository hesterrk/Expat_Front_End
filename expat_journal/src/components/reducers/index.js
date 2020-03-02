import { combineReducers } from "redux";
import { loginFormReducer } from "./loginFormReducer";
import { signUpReducer } from "./SignUpReducer";
import { journalListReducer } from "./JournalListReducer";
import { journalPageReducer } from "./journalPageReducer";
import { addJournalReducer } from "./addJournalReducer";

export default combineReducers({
  loginFormReducer,
  signUpReducer,
  journalListReducer,
  journalPageReducer,
  addJournalReducer
});
