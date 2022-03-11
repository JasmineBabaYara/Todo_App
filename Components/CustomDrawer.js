import React from "react";
import { View, Text, Image } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import {
  Entypo,
  Feather,
  AntDesign,
  SimpleLineIcons,
} from "expo-vector-icons";
import consistent from "../assets/images/consistant.png";
import profile from "../assets/images/profile.jpeg";
import styles from "../Styles/Customddrawerstyle";

const CustomDrawer = () => {
  return (
    <DrawerContentScrollView style={styles.drawercontainer}>
      <View style={styles.backicon}>
        <Entypo name="chevron-thin-left" size={16} color="white" />
      </View>
      <View style={styles.profilecontainer}>
        <Image source={profile} style={styles.profile} />
      </View>
      <Text style={styles.name}>Olivia {"\n"}Mitchell</Text>
      <View style={styles.optcontainer}>
        <Feather name="bookmark" size={22} color="grey" />
        <Text style={styles.options}>Templates</Text>
      </View>
      <View style={styles.optcontainer}>
        <SimpleLineIcons name="grid" size={18} color="grey" />
        <Text style={styles.options}>Categories</Text>
      </View>
      <View style={styles.optcontainer}>
        <AntDesign name="clockcircleo" size={18} color="grey" />
        <Text style={styles.options}>Analytics</Text>
      </View>
      <View style={styles.optcontainer}>
        <AntDesign name="clockcircleo" size={18} color="grey" />
        <Text style={styles.options}>Settings</Text>
      </View>

      <View style={styles.consistent}>
        <Image source={consistent} style={styles.consistentimg} />
        <Text style={styles.good}>Good</Text>
        <Text style={styles.consistenttxt}>Consistancy</Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
