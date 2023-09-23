import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecordsScreen } from "../../screens/RecordsScreen";
import { RecordScreen } from "../../screens/Record";

export type RecordsStackParamList = {
    RecordsList: undefined;
    Record: { localId: number };
};

export const RecordsStack = () => {
    const Stack = createNativeStackNavigator<RecordsStackParamList>();
    
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="RecordsList"
        >
            <Stack.Screen name="RecordsList" component={RecordsScreen} />
            <Stack.Screen name="Record" component={RecordScreen} />
        </Stack.Navigator>
    )
}