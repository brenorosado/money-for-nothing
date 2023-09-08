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

  const isDark = config.theme === "dark";

  return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            ...S.tabBar,
            backgroundColor: isDark ? darkTheme.colors.secundary : lightTheme.colors.secundary,
          },
          headerShown: false,
          tabBarActiveTintColor: isDark ? darkTheme.colors.main : lightTheme.colors.main,
          tabBarInactiveTintColor: isDark ? darkTheme.colors.aux13 : lightTheme.colors.aux12,
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