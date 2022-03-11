import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions, Alert } from "react-native";
import Carousel from "react-native-snap-carousel";
import Slider from "@react-native-community/slider";
import { ScrollView } from "react-native-gesture-handler";
{
  /* importing icons */
}
import {
  MaterialIcons,
  Feather,
  FontAwesome,
  AntDesign,
} from "expo-vector-icons";

//importing styles
import styles from "../Styles/Homescreenstyles";

// import Addtodo from "./Addtodo";



export default function Homescreen({ navigation }) {
  const sliderWidth = Dimensions.get("window").width;
  let carousel;
  const [activeNumber, setActiveNumber] = useState(0);
  const [carouselList, setCarouselList] = useState([
    {
      title: "40 tasks",
      content: "Business",
    },
    {
      title: "18 tasks",
      content: "Personal",
    },
    {
      title: "10 tasks",
      content: "Other",
    },
  ]);

  {
    /* todo items array */
  }
  

  

  const [value, setValue] = useState(0);
  const completeItem = (item) => {
    item.isDone = true;
    useForceUpdate();
  };

  const deleteItem = (item) => {
    // const tempArr = [...arr];
    // tempArr.splice(arr.indexOf(item), 1);
    // setArr(tempArr);
  };

  const useForceUpdate = () => {
    setValue((value) => value + 1);
  };

  return (
    <View style={styles.homecontainer}>
      <View style={styles.homeicons}>
        <TouchableOpacity>
          <MaterialIcons
            name="menu"
            size={26}
            color="grey"
            onPress={() => navigation.openDrawer()}
          />
        </TouchableOpacity>
        <View style={styles.othericons}>
          <Feather name="search" size={24} color="grey" />
          <FontAwesome name="bell-o" size={24} color="grey" />
        </View>
      </View>
      <Text style={styles.whatsup}>What's up, Olivia!</Text>
      <Text style={styles.categories}>Categories</Text>
      <View>
        <Carousel
          layout={"default"}
          ref={(ref) => (carousel = ref)}
          data={carouselList}
          sliderWidth={sliderWidth}
          sliderHeight={50}
          itemWidth={300}
          renderItem={renderItems}
          inSnapToItem={(index) => setActiveNumber(index)}
        />
      </View>

      <Text style={styles.task}>Today's Tasks</Text>
      <ScrollView>
        {/* {arr.map((item) => {
          return (
            <TouchableOpacity style={styles.todoitem}>
              <View style={styles.todoitemview}>
                <TouchableOpacity
                  style={styles.completed}
                  onPress={() => completeItem(item)}
                />
                <Text
                  style={{
                    textDecorationLine: item.isDone ? "line-through" : "none",
                    color: item.isDone ? "grey" : "none",
                    fontSize: 16,
                    marginLeft: 20,
                  }}
                >
                  {item.todo}
                </Text>
              </View>
              <FontAwesome
                name="remove"
                size={22}
                color="firebrick"
                onPress={() => deleteItem(item)}
              />
            </TouchableOpacity>
          );
        })} */}
      </ScrollView>
      <TouchableOpacity style={styles.addicon}>
        <AntDesign
          name="plus"
          size={24}
          color="white"
          onPress={() => navigation.navigate("Add")}
        />
      </TouchableOpacity>
    </View>
  );
}

const renderItems = ({ item }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        width: 250,
        height: 150,
        borderRadius: 30,
        marginTop: 30,
        alignItems: "flex-start",
      }}
    >
      <Text
        style={{ color: "grey", fontSize: 12, marginLeft: 15, marginTop: 30 }}
      >
        {item.title}
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 22,
          marginLeft: 15,
          marginTop: 15,
        }}
      >
        {item.content}
      </Text>
      <Slider
        style={{
          width: 210,
          height: 10,
          alignSelf: "center",
          bottom: 25,
          position: "absolute",
        }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="blue"
        maximumTrackTintColor="grey"
        thumbTintColor="blue"
        value={0.5}
      />
    </View>
  );
};
