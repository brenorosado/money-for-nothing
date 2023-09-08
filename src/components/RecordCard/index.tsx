import * as S from "./styles";
import { IRecord } from "../../models/Records";
import { Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RecordsStackParamList } from "src/navigation/Stacks/RecordsStack";

export const RecordCard = (
    { record, navigation }: {
        record: IRecord,
        navigation: NativeStackNavigationProp<RecordsStackParamList>
    }
) => {
    const { localId, category, value, localCreatedAt, type } = record;

    return (
        <S.RecordCardContainer onPress={() => navigation.navigate("Record", { localId })}>
            <Text style={{ color: "white" }}>{localCreatedAt}</Text>
            <Text style={{ color: "white" }}>{category}</Text>
            <Text style={{ color: "white" }}>{value}</Text>
        </S.RecordCardContainer>
    )
}