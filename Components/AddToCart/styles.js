import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemList: {
    backgroundColor: "rgba(255, 255, 255, 0.52)",
    width: 180,
    opacity: 1,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    backgroundColor: "transparent",
    opacity: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 30
  },

  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
    marginLeft: 10
  },
  basketBtn: {
    fontSize: 20,
    color: "black",
    margin: 20
  },
  icon2: {
    color: "white",
    height: 70,
    width: 70
  },

  mybutn: {
    borderRadius: 6,
    height: 50,
    width: 130,
    backgroundColor: "#00337a",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    marginBottom: 20
  },
  text1: {
    color: "white",
    fontSize: 18,
    fontFamily: "Futura",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 50
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
    borderRadius: 25
  },

  listitem: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    height: 180,
    flexDirection: "row"
  },
  transparent: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    flexDirection: "row",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  thumbnail: {
    backgroundColor: "transparent",
    opacity: 1,
    height: 140,
    width: 140,
    borderRadius: 30,
    marginLeft: 200
  },
  background: {
    width: null,
    flex: 1,
    borderRadius: 40,
    backgroundColor: "transparent"
  }
});
export default styles;
