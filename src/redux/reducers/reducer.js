import { combineReducers } from "redux";
import getCases from "./getCasesReducer";
import getStates from "./getStatesReducer";
import getUsers from "./getUsersReducer";
import { getMaha, getDelhi, getIndia } from "./getMahaReducer";

const reducers = combineReducers({
  GetCases: getCases,
  GetStates: getStates,
  GetUsers: getUsers,
  GetMaha: getMaha,
  GetDelhi: getDelhi,
  GetIndia: getIndia
});

export default reducers;
