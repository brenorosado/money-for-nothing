import { Stacks } from "./Stacks";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

const APP_THEME = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    //   background: theme.colors.white,
    },
  };

export const Navigation = () => {
    console.log("navigation rendering");

    return (
        <SafeAreaProvider>
            <StatusBar
                backgroundColor="black"
                translucent={false}
                hidden={false}
                style="dark"
            />
            <NavigationContainer theme={APP_THEME}>
                <Stacks />
            </NavigationContainer>
        </SafeAreaProvider>
    )
}