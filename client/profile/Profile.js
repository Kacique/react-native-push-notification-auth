import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { getDatabase, onValue, set, ref } from "firebase/database";

const Profile = (props) => {
  //const usersRef = ref(db, "users/" + props.userId);

  const [name, setUserName] = useState("");

  function writeUserData() {
    const db = getDatabase();
    set(ref(db, "users/" + props.userId), {
      username: name,
    });

    props.navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Username</Text>
      <TextInput
        placeholder="Enter Username"
        value={name}
        onChangeText={setUserName}
      ></TextInput>
      <TouchableOpacity onPress={writeUserData}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

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
