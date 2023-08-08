import { useConfig } from "../contexts/Config";
import { Stacks } from "./Stacks";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { darkTheme } from "../theme/darkTheme";
import { lightTheme } from "../theme/lightTheme";
import { ThemeProvider } from "styled-components/native";

const APP_THEME = DefaultTheme;

export const Navigation = () => {
    console.log("navigation rendering");

    const { config } = useConfig();

    return (
        <ThemeProvider theme={config.theme === "dark" ? darkTheme : lightTheme}>
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
        </ThemeProvider>
    )
}