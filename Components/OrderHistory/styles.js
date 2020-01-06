import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    opacity: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 30
  },
  text: {
    color: "rgba(0, 0, 0, 0.85)",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
    opacity: 1
  },

  text1: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "500"
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
    backgroundColor: "rgba(255, 255, 255, 0.52)",
    height: "100%",
    width: "100%",
    borderRadius: 5
  },
  cardView: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    // marginBottom: 10,
    borderRadius: 5
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
    height: 100,
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
