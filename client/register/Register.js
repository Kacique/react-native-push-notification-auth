import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggleRegister, setToggleRegister] = useState(false);

  const register = () => {
    createUserWithEmailAndPassword(props.userAuth, email, password);
  };

  const login = () => {
    signInWithEmailAndPassword(props.userAuth, email, password);
  };

  useEffect(() => {
    if (props.userId !== "") {
      props.navigation.navigate("Home");
    } else {
      setEmail("");
      setPassword("");
    }
  }, [props.userId]);
  return (
    <View>
      {toggleRegister ? (
        <View>
          <Text>Register</Text>
          <Text>Email</Text>
          <TextInput
            placeholder="Enter email"
            value={email}
            onChangeText={setEmail}
          />

          <Text>Password</Text>
          <TextInput
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={register}>
            <Text>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setToggleRegister(!toggleRegister)}>
            <Text>Already Signed Up? Log In Here</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text>Login</Text>
          <Text>Email</Text>
          <TextInput
            placeholder="Enter email"
            value={email}
            onChangeText={setEmail}
          />

          <Text>Password</Text>
          <TextInput
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={login}>
            <Text>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setToggleRegister(!toggleRegister)}>
            <Text>Don't have an account? Signup</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Register;
