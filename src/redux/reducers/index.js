import { combineReducers } from "redux";
import LoginReducer from "./auth/login.reducer";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "cinch",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  login: LoginReducer,
});

export default persistReducer(persistConfig, rootReducer);
