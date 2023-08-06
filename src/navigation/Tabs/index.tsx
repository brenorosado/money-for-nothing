import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RecordsScreen } from "../../screens/Records";
import { ConfigScreen } from "../../screens/Config";
import { View } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { styles as S } from "./styles";


const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: S.tabBar,
            headerShown: false,
            // tabBarActiveTintColor: theme.colors.primary_700,
            // tabBarInactiveTintColor: theme.colors.black,
            unmountOnBlur: true,
            tabBarHideOnKeyboard: true,
          }}
      >
         <Tab.Screen
          name="Records"
          component={RecordsScreen}
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
    )
}