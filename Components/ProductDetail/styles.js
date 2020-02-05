import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
  overlay: {
    flex: 1,
    margin: 20,
    backgroundColor: "black",
    opacity: 0.6,
    borderRadius: 30
  },

  image: {
    height: 200,
    width: 200,
    marginTop: 20
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },

  name: {
    fontSize: 20,
    fontWeight: "bold"
  },
  myDetailCard: {
    margin: 20,
    borderRadius: 50,
    textAlign: "center",
    alignSelf: "center"
  },

  icon: {
    marginRight: 10,
    color: "white",
    fontSize: 25
  },
  basketBtn: {
    textAlign: "center",
    alignSelf: "center",
    fontSize: 22,
    color: "white"
  },

  basketBtnOutofStock: {
    fontSize: 20,
    marginLeft: 30
  },
  description: {
    fontSize: 20,
    margin: 20
  },

  country: {
    fontSize: 20,
    marginLeft: 20,
    fontWeight: "bold"
  },

  countryName: {
    fontSize: 20,
    marginLeft: 10
  },
  icon2: {
    color: "white",
    height: 40,
    width: 40
  },
  price: {
    fontSize: 20,
    textDecorationLine: "none",
    //textAlign: "right",
    margin: 20
  },
  order: {
    textAlign: "center",
    alignSelf: "center",
    fontSize: 24
  },

  mybutn: {
    textAlign: "center",
    alignSelf: "center",
    borderRadius: 100,
    width: 200,
    marginTop: 15
  },
  addToCartBtn: {
    backgroundColor: "#535859",
    textAlign: "center",
    alignSelf: "center",
    borderRadius: 100,
    width: 200,
    height: 65
  },
  myCard: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 100,
    textAlign: "center",
    alignSelf: "center",
    marginBottom: 10,
    width: 200
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
  myCard2: {
    backgroundColor: "transparent",
    borderRadius: 5,
    textAlign: "center",
    alignSelf: "center",
    marginBottom: 10,
    width: 370
  },

  hairLine: {
    backgroundColor: "rgba(5, 9, 30, 0.46)",
    height: 2,
    marginBottom: 30,

    marginLeft: 30,
    width: 340
  }
});

export default styles;
