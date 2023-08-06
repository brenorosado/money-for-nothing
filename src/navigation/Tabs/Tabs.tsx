import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RecordsScreen } from "../../screens/records";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

export const tabBarStyle = {
  // backgroundColor: theme.colors.background,
  borderTopColor: "transparent",
  paddingHorizontal: 20,
  paddingBottom: 10,
  height: 65,
};


export const Tabs = () => {
    return (
        <Tab.Navigator
          screenOptions={{
            tabBarStyle,
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
              <Text>Rec</Text>
              // <IconWrapper color={color}>
              //   <HomeIcon color={color} />
              // </IconWrapper>
            ),
          }}
        />
      </Tab.Navigator>
    )
}