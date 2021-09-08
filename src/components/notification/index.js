import React from "react";
import PropTypes from "prop-types";
import { Notification } from "./styles";

const App = ({ error, message, errormessage, successmessage }) => {
  const condition = !!error || !!message || !!errormessage || !!successmessage;
  const text = error || message || errormessage || successmessage;

  return (
    <Notification
      error={condition}
      message={message}
      errormessage={errormessage}
      successmessage={successmessage}
    >
      {text}
    </Notification>
  );
};

App.propTypes = {
  error: PropTypes.string,
  errormessage: PropTypes.string,
  message: PropTypes.string,
  successmessage: PropTypes.string,
};

App.defaultProps = {
  error: "",
  message: "",
  errormessage: "",
  successmessage: "",
};
export default App;
