import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  homecontainer: {
    height: "100%",
    width: "100%",
    display: "flex",
  },
  homeicons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 70,
    marginLeft: 20,
    marginRight: 20,
  },
  othericons: {
    flexDirection: "row",
    width: 65,
    justifyContent: "space-between",
  },
  whatsup: {
    fontSize: 30,
    marginLeft: 20,
    marginTop: 20,
    fontWeight: "500",
  },
  categories: {
    color: "grey",
    textTransform: "uppercase",
    marginLeft: 20,
    marginTop: 40,
  },
  task: {
    color: "grey",
    textTransform: "uppercase",
    marginLeft: 20,
    marginTop: 40,
    marginBottom: 10,
  },
  addicon: {
    backgroundColor: "blue",
    width: 50,
    height: 50,
    padding: 10,
    alignItems: "center",
    borderRadius: 30,
    position: "absolute",
    bottom: 30,
    alignSelf: "flex-end",
    right: 15,
    shadowColor: "blue",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    elevation: 1,
  },
  todoitem: {
    padding: 20,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
    width: "90%",
    alignSelf: "center",
    borderRadius: 15,
    marginTop: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  todoitemview: {
    flexDirection: "row",
    alignItems: "center",
  },
  completed: {
    borderRadius: 10,
    height: 15,
    width: 15,
    borderWidth: 1,
    borderColor: "deeppink",
  },
});

export default styles;
