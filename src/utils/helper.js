//error message retriever
export const retrieveErrMessage = (err) => {
  if (err.response && err.response.data && err.response.data.errors) {
    return err.response.data.errors;
  } else if (err.response && err.response.data) {
    return err.response.data;
  } else if (err.response) {
    return err.response;
  } else {
    return err;
  }
};
