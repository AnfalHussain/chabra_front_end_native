import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemList: {
    backgroundColor: "rgba(255, 255, 255, 0.52)",
    opacity: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 25
  },

  container: {
    backgroundColor: "rgba(255, 255, 255, 0.52)",
    opacity: 1,
    marginTop: 15,

    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    borderRadius: 30
  },

  containerBottom: {
    backgroundColor: "transparent",
    opacity: 1,
    position: "relative",
    top: 120,
    marginTop: 15,

    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    borderRadius: 30
  },

  hairLine: {
    backgroundColor: "rgba(42, 37, 59, 0.59)",
    height: 2,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    width: 320
  },
  scrollView: {
    height: 90,

    backgroundColor: "transparent"
  },
  main: {
    justifyContent: "center",
    alignItems: "center"
  },
  inputField: {
    width: 80
  },
  imgView: {
    justifyContent: "center",
    alignItems: "center"
  },
  checkoutStyle: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontFamily: "Futura",
    fontWeight: "100"
  },

  image: {
    height: 300,
    width: 300
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },

  name: {
    fontSize: 20,
    fontWeight: "bold"
  },
  description: {
    fontSize: 20,
    margin: 20
  },
  icon2: {
    color: "white",
    height: 30,
    width: 30
  },
  total: {
    fontSize: 20,
    fontFamily: "Futura",
    textDecorationLine: "none",
    //textAlign: "right",
    marginLeft: 20
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,

    textDecorationLine: "none",
    //textAlign: "right",
    marginLeft: 20,
    marginRight: 20
  },
  order: {
    textAlign: "center",
    alignSelf: "center"
  },
  overlay: {
    flex: 1,
    margin: 15,
    backgroundColor: "white",
    opacity: 0.6,
    borderRadius: 30
  },

  roundedBtn: {
    textAlign: "center",
    alignSelf: "center"
  }
});

export default styles;
