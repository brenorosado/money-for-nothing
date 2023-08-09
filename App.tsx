import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Navigation} from "./src/navigation";
import { ConfigContextProvider } from "./src/contexts/Config";
import {Record} from "./src/models/Records";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default function App() {

  useEffect(() => {
    Record.createTable();
  }, [])

  return (
    <ConfigContextProvider>
      <View style={styles.container}>
        <Navigation />
      </View>
    </ConfigContextProvider>
  );
}
