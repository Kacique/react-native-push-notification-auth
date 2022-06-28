import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { getDatabase, onValue, set, ref } from "firebase/database";

const Home = (props) => {
  const db = getDatabase();
  const usersRef = ref(db, "users/" + props.userId);

  const signOut = () => {
    props.userAuth.signOut();
  };

  useEffect(() => {
    console.log(usersRef);
    if (props.userId === "") {
      props.navigation.navigate("Register");
    }
  }, [props.userId]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>We are home!</Text>
      <TouchableOpacity onPress={signOut}>
        <Text style={styles.text}>Sign Out</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Profile");
        }}
      >
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
