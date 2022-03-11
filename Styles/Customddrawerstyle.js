import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  drawercontainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    backgroundColor: "#000C66",
  },
  backicon: {
    borderWidth: 2,
    width: 45,
    borderColor: "grey",
    borderRadius: 28,
    alignItems: "center",
    padding: 12,
    position: "absolute",
    top: "7%",
    left: "75%",
  },
  profilecontainer: {
    width: 120,
    height: 120,
    marginTop: 100,
  },
  profile: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginLeft: 40,
  },

  name: {
    fontSize: 33,
    fontWeight: "800",
    color: "#fff",
    marginLeft: 40,
    marginTop: 25,
    marginBottom: 40,
  },
  optcontainer: {
    marginTop: 30,
    flexDirection: "row",
    marginLeft: 40,
  },
  options: {
    color: "#fff",
    marginLeft: 18,
    //marginTop:4,
    fontSize: 16,
  },
  consistent: {
    width: 200,
    height: 100,
    marginTop: 80,
    marginLeft: 40,
  },
  consistentimg: {
    width: 200,
    height: 100,
  },
  good: {
    color: "grey",
    marginTop: 15,
  },
  consistenttxt: {
    color: "#fff",
    fontSize: 20,
    marginTop: 5,
    fontWeight: "500",
  },
});

export default styles;
