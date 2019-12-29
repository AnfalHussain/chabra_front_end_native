import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    backgroundColor: "white",
    width: 340,
    position: "relative",
    left: 20
  },
  inputField: {
    width: 80
  },
  imgView: {
    justifyContent: "center",
    alignItems: "center"
  },
  checkoutStyle: {
    color: "white",
    fontSize: 20,
    padding: 20,
    marginBottom: 40
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

  roundedBtn: {
    borderRadius: 80,
    textAlign: "center",
    alignSelf: "center"
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.52)",
    opacity: 1,
    marginTop: 15,

    marginLeft: 15,
    marginRight: 15,
    height: 700,
    borderRadius: 30
  }
});

export default styles;
