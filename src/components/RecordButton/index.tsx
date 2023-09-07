import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as S from "./styles";
import { RecordsStackParamList } from "../../navigation/Stacks/RecordsStack";

export const RecordButton = (
    { navigation }: {
        navigation: NativeStackNavigationProp<RecordsStackParamList>
    }
) => {
    return (
        <S.NewRecordFloatinButton
            onPress={() => navigation.navigate("Record", { localId: undefined })}
        >
            <S.PlusIcon />
        </S.NewRecordFloatinButton>
    )
}