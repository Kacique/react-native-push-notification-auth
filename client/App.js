import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Register from "./register/Register";

//executes connection to Firebase
import "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Stack = createNativeStackNavigator();

function App() {
  const [userId, setUserId] = useState("");

  const userAuth = getAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register">
          {(props) => (
            <Register {...props} userAuth={userAuth} userId={userId} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
