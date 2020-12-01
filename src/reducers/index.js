import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import gamesReducer from "./gamesReducer";

const rootReducers = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});

export default rootReducers;
