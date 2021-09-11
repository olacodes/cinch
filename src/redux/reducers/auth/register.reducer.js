import { REGISTER } from "../../constants";

const initialState = {
  onError: false,
  fetching: false,
  fetched: false,
  resp: {},
  error: {},
};

const registerReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER.default:
      return { ...state, error: {} };
    case REGISTER.pending:
      return { ...state, fetching: true };
    case REGISTER.success: {
      return {
        ...state,
        onError: false,
        fetching: false,
        fetched: true,
        resp: payload.data,
      };
    }
    case REGISTER.failed:
      return {
        ...state,
        fetching: false,
        fetched: true,
        onError: true,
        error: payload.errors,
        resp: payload,
      };
    default:
      return { ...state };
  }
};

export default registerReducer;
