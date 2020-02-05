import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    opacity: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 15
  },
  left: {
    width: "90%"
  },
  right: {
    width: "10%"
  },
  text: {
    color: "#EF8A08",
    fontFamily: "Futura",
    fontSize: 22,
    fontWeight: "400",
    paddingHorizontal: 50,
    // paddingLeft: 10,
    paddingBottom: 10,
    opacity: 1
  },
  menu: {
    color: "black",
    tintColor: "black"
  },

  icon: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 20
  },
  viewIcon: {
    marginVertical: 30,
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 18
  },

  text1: {
    fontFamily: "Futura",
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "300"
  },

  viewMessage: {
    backgroundColor: "rgba(255, 255, 255, 0.52)",
    opacity: 1,
    margin: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  noOrdersMessage: {
    color: "black",
    fontSize: 22,
    margin: 30
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    height: "100%",
    width: "100%",
    borderRadius: 5
  },
  cardView: {
    marginTop: 2,
    marginLeft: 20
    // marginBottom: 10,
  },
  cardDesign: {
    borderRadius: 50
  },

  listitem: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    flexDirection: "row"
  },
  transparent: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    flexDirection: "row",
    borderRadius: 5
  },

  background: {
    width: null,
    flex: 1,
    borderRadius: 40,
    backgroundColor: "transparent"
  }
});
export default styles;
