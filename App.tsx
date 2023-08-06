import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Navigation} from "./src/navigation";
import { ConfigContextProvider } from "./src/contexts/Config";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default function App() {
  return (
    <ConfigContextProvider>
      <View style={styles.container}>
        <Navigation />
      </View>
    </ConfigContextProvider>
  );
}
