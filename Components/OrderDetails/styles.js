import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  hairLine: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 2,
    marginBottom: 22,
    marginTop: 22,

    width: 336
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
  text: {
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 18,
    marginLeft: 16,
    fontFamily: "Futura"
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  top: {
    marginLeft: 0,
    backgroundColor: "#ffffcc"
  },

  titleOfDetail: {
    marginBottom: 22,
    color: "black",
    fontSize: 20,
    fontWeight: "bold"
  },

  middleText: {
    marginTop: 12,
    marginBottom: 8,
    backgroundColor: "transparent",
    color: "rgba(0, 0, 0, 0.7)",
    fontWeight: "bold",
    fontSize: 24,
    justifyContent: "center",
    alignItems: "center"
    // alignSelf: "center",
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  addIcon: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white"
  },
  item: {
    color: "white"
  }
});

export default styles;
