import React, { useState, useEffect, useCallback } from "react";
import { Text } from "../../components/typography/text.component";
import { Spacer } from "../../components/spacer";
import { TextInput, StyleSheet } from "react-native";
import { Button } from "../../components/button";

import {
  Wrapper,
  Container,
  TopContent,
  BottomContent,
  TextContainer,
  LineStyle,
} from "./login.styles";
import login, {
  clearLoginErrorAction as clear,
} from "../../redux/actions/auth/login.action";
import { connect } from "react-redux";

const LoginScreen = ({ loginData, login, clear, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { message, errors, token, payload, onError } = loginData;
  const errMsg = errors ? Object.values(errors)[0] : "";
  console.log(errMsg);
  const auth = useCallback(() => {
    if (message === "failure") {
      return;
    } else if (message === "success") {
      navigation.navigate("Loading");
    }
  }, [message, navigation]);
  const handleSubmit = async () => await login({ email, password }, auth);

  useEffect(() => {
    !!token && !!payload && auth();
    clear && clear();
  }, [auth, token, payload, message, clear]);

  return (
    <Wrapper>
      <Container>
        <TopContent>
          <Spacer position="bottom" size="large">
            <Text variant="title"> Let's Goooooo!</Text>
          </Spacer>
          <Spacer position="bottom" size="xLarge">
            <Text>
              One small step to reach the earn revenue on your music for life.
            </Text>
          </Spacer>
        </TopContent>
        <BottomContent>
          <TextContainer>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={[styles.input]}
              value={email}
              onChangeText={setEmail}
              placeholder="Your email"
            />
            <LineStyle />
            <TextInput
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Your password"
            />
          </TextContainer>
          <Spacer position="top" size="large">
            <Text variant="error">{errMsg}</Text>
          </Spacer>
          <Spacer position="vertical" size="xLarge">
            <Button title="LOGIN" onPress={handleSubmit} />
          </Spacer>
          <Spacer position="top" size="large">
            <Text variant="hint" style={{ textAlign: "center" }}>
              Create new account
            </Text>
          </Spacer>
        </BottomContent>
      </Container>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 15,
  },
});

const mapStateToProps = (store) => ({
  loginData: store.login,
});
export default connect(mapStateToProps, { login, clear })(LoginScreen);
