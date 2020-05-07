import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import videos from "./feed"
import user from "./user"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    videos,
    user
    // Outros reducers aqui
  });
