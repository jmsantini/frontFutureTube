import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import videos from "./feed"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    videos,
    // Outros reducers aqui
  });
