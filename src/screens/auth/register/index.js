import React, { useCallback, useEffect } from "react";
import { Formik } from "formik";
import { TextInput, TouchableOpacity } from "react-native";
import { connect, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "src/components/typography/text.component";
import { Spacer } from "src/components/spacer";
import { Button } from "src/components/button";
import { Wrapper, Container, TopContent } from "../login/login.styles";
import { SocialList } from "src/components/socials/socialList";
import {
  FormContent,
  BottomContent,
  InputFormCont,
  InputButtonCont,
  styles,
  Line,
  ErrMsgCont,
} from "./styles";
import { RegisterSchema } from "./register.validation";
import registerBoundAction, {
  clearRegisterErrorBoundAction,
} from "src/redux/actions/auth/register.action";

const initialValues = {
  fullname: "",
  email: "",
  password: "",
};
const RegisterScreen = ({ navigation, registerAction, clear, register }) => {
  // const { register } = useSelector((state) => state);
  const { onError, resp, error } = register;

  const errMsg = onError && error ? error : null;

  const registerHandler = useCallback(() => {
    if (resp && resp.message === "success") {
      navigation.navigate("login");
    } else if (!!onError && !!resp.errors) {
      return;
    }
  }, [onError, navigation, resp]);

  useEffect(() => {
    !!resp && !!resp.message && registerHandler();
    clear && clear();
  }, [resp, registerHandler, clear]);
  return (
    <Wrapper>
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <TopContent>
            <Spacer position="bottom" size="large">
              <Text variant="title"> Create Account </Text>
            </Spacer>
            <Spacer position="bottom" size="xLarge">
              <Text>Create one now to showcase your music and content</Text>
            </Spacer>
          </TopContent>
          <FormContent>
            <Formik
              initialValues={initialValues}
              validationSchema={RegisterSchema}
              onSubmit={async (values) => await registerAction(values)}
            >
              {({
                handleBlur,
                handleChange,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <InputButtonCont>
                  <InputFormCont>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={handleChange("fullname")}
                      onBlur={handleBlur("fullname")}
                      value={values.fullname}
                      style={[styles.input, styles.first]}
                      placeholder="Full name"
                    />
                    <Line />

                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={[styles.input, styles.middle]}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      placeholder="Email"
                    />
                    <ErrMsgCont>
                      {errors.email && touched.email ? (
                        <Text variant="error">{errors.email}</Text>
                      ) : null}
                      {errMsg && errMsg.email ? (
                        <Text variant="error">{errMsg.email[0]}</Text>
                      ) : null}
                    </ErrMsgCont>
                    <Line />

                    <TextInput
                      secureTextEntry
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={[styles.input, styles.last]}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      placeholder="Your password"
                    />
                    <Spacer position="bottom" size="medium">
                      <ErrMsgCont>
                        {errMsg && errMsg.password ? (
                          <Text variant="error">{errMsg.password[0]}</Text>
                        ) : null}
                        {errors.password && touched.password ? (
                          <Text variant="error">{errors.password}</Text>
                        ) : null}
                      </ErrMsgCont>

                      <ErrMsgCont>
                        {errMsg && errMsg.non_field_errors ? (
                          <Text variant="error">
                            {errMsg.non_field_errors[0]}
                          </Text>
                        ) : null}
                      </ErrMsgCont>
                    </Spacer>
                  </InputFormCont>
                  <Spacer position="vertical" size="xLarge">
                    <Button title="Create Account" onPress={handleSubmit} />
                  </Spacer>
                </InputButtonCont>
              )}
            </Formik>
            <Spacer position="top" size="medium">
              <TouchableOpacity onPress={() => navigation.navigate("login")}>
                <Text variant="hint" style={{ textAlign: "center" }}>
                  Already have an account?
                </Text>
              </TouchableOpacity>
            </Spacer>
          </FormContent>
          <BottomContent>
            <Spacer position="bottom" size="large">
              <Text style={{ textAlign: "center" }}>or sign up with</Text>
            </Spacer>
            <SocialList />
          </BottomContent>
        </Container>
      </SafeAreaView>
    </Wrapper>
  );
};

const mapDispatchToProps = {
  registerAction: registerBoundAction,
  clear: clearRegisterErrorBoundAction,
};

const mapStateToProps = ({ register }) => ({
  register,
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
