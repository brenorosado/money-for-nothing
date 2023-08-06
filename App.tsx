import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Navigation} from "./src/navigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default function App() {
  return (
      <View style={styles.container}>
        <Navigation />
      </View>
  );
}
