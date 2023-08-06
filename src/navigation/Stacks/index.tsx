import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Tabs } from "../Tabs";

export const Stacks = () => {
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Main"
        >
            <Stack.Screen name="Main" component={Tabs} />
        </Stack.Navigator>
    )
}