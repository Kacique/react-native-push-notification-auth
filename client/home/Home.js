import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { getDatabase, onValue, set, ref } from "firebase/database";

const Home = (props) => {
  const [user, setUser] = useState(null); //current
  const [users, setUsers] = useState([]); //others

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
    return onValue(usersRef, (snapshot) => {
      if (snapshot.val() !== null) {
        const data = snapshot.val();
        let arr = Object.keys(data).map((key) => data[key]);
        //setTopThree(arr.splice(0, 3));
        setUsers(arr.splice(0, 7));
        console.log(data);
      } else {
        //setHighScoreList([]);
      }
    });
  }, []);
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
    top: 150,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
