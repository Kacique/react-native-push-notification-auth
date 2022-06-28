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

  const register = () => {
    createUserWithEmailAndPassword(props.userAuth, email, password);
  };

  const login = () => {
    signInWithEmailAndPassword(props.userAuth, email, password);
  };

  return (
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
    </View>
  );
};

export default Register;
