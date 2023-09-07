import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RecordsStack } from "../Stacks/RecordsStack";
import { ConfigScreen } from "../../screens/Config";
import { View } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { styles as S } from "./styles";
import { useConfig } from "../../contexts/Config";
import { darkTheme } from "../../theme/darkTheme";
import { lightTheme } from "../../theme/lightTheme";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  
  const { config } = useConfig();

  return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            ...S.tabBar,
            backgroundColor: config.theme === "dark" ? darkTheme.colors.secundary : lightTheme.colors.secundary,
          },
          headerShown: false,
          tabBarActiveTintColor: config.theme === "dark" ? darkTheme.colors.main : lightTheme.colors.main,
          tabBarInactiveTintColor: config.theme === "dark" ? darkTheme.colors.aux : lightTheme.colors.aux,
          unmountOnBlur: true,
          tabBarHideOnKeyboard: true,
        }}
    >
        <Tab.Screen
        name="Records"
        component={RecordsStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="cash-outline" size={24} color={color} />
          ),
        }}
      />
        <Tab.Screen
        name="Configuration"
        component={ConfigScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={S.iconWrapper}>
              <Ionicons name="settings-outline" size={24} color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}