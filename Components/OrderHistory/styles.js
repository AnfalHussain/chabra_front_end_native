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
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,

    opacity: 1
  },

  text1: {
    color: "white",
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "bold"
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

    opacity: 0.3,
    backgroundColor: "black",
    height: "100%",
    width: "100%",
    borderRadius: 30
  },
  cardView: {
    marginTop: 10,

    marginLeft: 10,
    marginRight: 10,
    // marginBottom: 10,
    borderRadius: 30
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
    height: 150,
    flexDirection: "row"
  },
  transparent: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    flexDirection: "row",
    borderRadius: 50
  },
  thumbnail: {
    backgroundColor: "white",
    opacity: 1,
    height: 140,
    width: 140,
    borderRadius: 30
  },
  background: {
    width: null,
    flex: 1,
    borderRadius: 40,
    backgroundColor: "transparent"
  }
});
export default styles;
