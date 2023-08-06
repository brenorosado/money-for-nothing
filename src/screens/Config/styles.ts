import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 16,
        gap: 16
    },
    configContainer: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 16
    },
    configHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        padding: 16,
        borderRadius: 16
    },
    configHeaderText: {
        color: "black",
        fontSize: 20,
        lineHeight: 20
    },
    configOption: {
        padding: 16,
        backgroundColor: "#e1e1e1"
    },
    lastConfigOption: {
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    }
})