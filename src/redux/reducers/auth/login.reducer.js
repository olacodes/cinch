import { LOGIN } from "../../constants";

const loginState = {
  token: "",
  errors: "",
  message: "",
  loading: false,
};

const LoginReducer = (state = loginState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN.failed:
      return {
        ...state,
        errors: payload.errors,
        message: payload.message,
        loading: false,
      };
    case LOGIN.pending:
      return {
        ...state,
        loading: true,
      };

    case LOGIN.success:
      return {
        ...state,
        token: payload.data.data.token,
        message: payload.data.message,
        loading: false,
        payload: payload.data,
        errors: "",
      };
    case LOGIN.default:
      return {
        ...state,
        loading: false,
        message: "",
      };
    default:
      return state;
  }
};

export default LoginReducer;
