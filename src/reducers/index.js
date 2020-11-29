import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";

const rootReducers = combineReducers({
  games: gamesReducer,
});

export default rootReducers;
