import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { addItem } from "../Components/utils";
//importing styles
import styles from "../Styles/Addtodostyle";

//importing expo icons
import { Feather, AntDesign } from "expo-vector-icons";



export default function Addtodo({ navigation }) {
  const [todo, setTodo] = useState("");

  const [arr, setArr] = useState([
    { todo: "Work on project" },
    { todo: "Go and visit babe " },
    { todo: "Check emails" },
    { todo: "Lunch with babe" },
    { todo: "Meditation" },
  ]);

  const addItem = (todo) => {
    if (!todo) {
      Alert.alert("Please enter an item ", { text: "OK" });
    } else {
      const newArr = arr.push({ todo: todo})
      console.log("newArr", newArr)
      setArr(newArr);
      console.log("newArr 2", arr)
    }
  };

  return (
    <View style={styles.addcontainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.closeicon}
      >
        <AntDesign name="close" size={20} color="black" />
      </TouchableOpacity>
      <TextInput
        placeholder="Enter new task"
        placeholderTextColor={"grey"}
        onChangeText={(value) => setTodo(value)}
        style={styles.input}
      />
      <View style={styles.firsticons}>
        <View style={styles.calender}>
          <Feather name="calendar" size={24} color="grey" />
          <Text style={styles.calendertxt}>Today</Text>
        </View>
        <View style={styles.circle}>
          <View style={styles.circle2}>
            <View style={styles.circle3} />
          </View>
        </View>
      </View>
      <View style={styles.icons}>
        <Feather name="folder-plus" size={24} color="grey" />
        <Feather name="flag" size={24} color="grey" />
        <Feather name="moon" size={24} color="grey" />
      </View>
      <TouchableOpacity onPress={() => {addItem(todo), console.log(arr)}} style={styles.newtask}>
        <Text style={styles.newtasktxt}>New Task </Text>
        <AntDesign
          name="up"
          size={17}
          color="white"
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
}
