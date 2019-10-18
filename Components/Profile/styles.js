import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    hairLine: {
        backgroundColor: '#cccccc',
        height: 2,
        marginBottom: 22,
        marginTop: 22,
        width: 340
    },
    image: {
        marginBottom: 22,
        marginTop: 22,
        width: 180,
        height: 180,
        borderColor: "#4e5869",
        // borderWidth: 1,
        borderRadius: 90,
        // shadowOffset: { width: 300, height: 300 },
        // shadowColor: "#3b3c3d",
        // shadowRadius: 1,
        // shadowOpacity: 0.9,

        shadowColor: '#000',
        shadowOffset: { width: 5, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },


    text: {
        color: "black",
        fontSize: 15,
        marginLeft: 16,

        justifyContent: "center",
        alignItems: "center"
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
        fontWeight: "bold",

    },


    middleText: {
        marginTop: 12,
        marginBottom: 8,

        color: "#191b73",
        fontWeight: "bold",
        fontSize: 24,
        justifyContent: 'center',
        alignItems: 'center',

    },
    icon: {
        marginLeft: 10,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
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
