import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { getDatabase, onValue, set, ref, get, child } from "firebase/database";

const Home = (props) => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  // const [user, setUser] = useState(null); //current
  // const [users, setUsers] = useState([]); //others

  const db = getDatabase();
  const usersRef = ref(db, "users/");

  const signOut = () => {
    props.userAuth.signOut();
  };

  useEffect(() => {
    if (props.userId === "") {
      props.navigation.navigate("Register");
    }
  }, [props.userId]);

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>We are home!</Text>
      <TextInput
        placeholder="Enter Title"
        value={title}
        onChangeText={setTitle}
      ></TextInput>
      <TextInput
        placeholder="Enter Message"
        value={body}
        onChangeText={setBody}
      ></TextInput>

      <Text></Text>
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
    top: 150,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
