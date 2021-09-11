import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import LoginReducer from "src/redux/reducers/auth/login.reducer";
import registerReducer from "src/redux/reducers/auth/register.reducer";

const persistConfig = {
  key: "cinch",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  register: registerReducer,
  login: LoginReducer,
});

export default persistReducer(persistConfig, rootReducer);
