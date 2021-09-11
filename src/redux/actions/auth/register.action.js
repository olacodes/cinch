import { REGISTER } from "../../constants";
import request from "src/utils/request";
import { retrieveErrMessage } from "../../../utils/helper";

const registerSuccess = (payload) => ({
  type: REGISTER.success,
  payload,
});

const registerFailed = (payload) => ({
  type: REGISTER.failed,
  payload,
});

export const clearRegisterErrorBoundAction = {
  type: REGISTER.default,
};

const registerBoundAction = (payload, cb) => async (dispatch) => {
  payload = { ...payload, confirm_password: payload.password };
  try {
    const res = await request.post("/auth/register", payload);
    cb && cb();
    return dispatch(registerSuccess(res));
  } catch (error) {
    cb && cb();
    const err = retrieveErrMessage(error);
    return dispatch(registerFailed(err));
  }
};

export default registerBoundAction;
