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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Register</Text>
    </View>
  );
};

export default Login;
