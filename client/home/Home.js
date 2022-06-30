import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { getDatabase, onValue, set, ref, get, child } from "firebase/database";

const Home = (props) => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const [users, setUsers] = useState(); //others

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
    const db = getDatabase();
    const dbRef = ref(db, "users/");

    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const returnedItems = snapshot.val();
        let result = Object.keys(returnedItems).map(
          (key) => returnedItems[key]
        );
        // console.log(result);
        setUsers(result);
        // setUsers([snapshot.val()]);
        //console.log(users);
      } else {
        console.log("No data available");
      }
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
      <FlatList
        data={users}
        renderItem={({ item, index }) => (
          <View key={index}>
            <TouchableOpacity>
              <Text>{item.username}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(index) => index.toString()}
      />
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
    top: 10,
  },
  flatlistContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
