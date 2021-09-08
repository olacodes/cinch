import { LOGIN } from "../../constants";
import request from "../../../utils/request";
import { retrieveErrMessage } from "../../../utils/helper";
// Action return a type and an optional payload

const loginSuccess = (payload) => ({
  type: LOGIN.success,
  payload,
});
const loginStart = () => ({
  type: LOGIN.pending,
});

const loginFail = (payload) => ({
  type: LOGIN.failed,
  payload,
});

export const clearLoginError = () => ({
  type: LOGIN.default,
});

export const clearLoginErrorAction = () => async (dispatch) => {
  dispatch(clearLoginError());
};

const login = (payload, cb) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const data = await request.post("/auth/login", payload);
    cb && cb();
    return dispatch(loginSuccess(data));
  } catch (error) {
    const err = retrieveErrMessage(error);
    cb && cb();
    return err && dispatch(loginFail(err));
  }
};

export default login;
