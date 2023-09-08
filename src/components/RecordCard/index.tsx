import * as S from "./styles";
import { IRecord } from "../../models/Records";
import { Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RecordsStackParamList } from "src/navigation/Stacks/RecordsStack";
import { fortmatToBRL } from "../../utils/formatCurrency";
import { formatToBrazilianDate } from "../../utils/fortmatDate"; 

export const RecordCard = (
    { record, navigation }: {
        record: IRecord,
        navigation: NativeStackNavigationProp<RecordsStackParamList>
    }
) => {
    const { localId, category, value, localCreatedAt, type } = record;

    const isExpense = type === "EXPENSE"

    return (
        <S.RecordCardContainer
            onPress={() => navigation.navigate("Record", { localId })}
            isExpense={isExpense}
        >
            <S.CategoryAndDateContainer>
                <S.NormalText>{category}</S.NormalText>
                <S.NormalText>{formatToBrazilianDate(localCreatedAt)}</S.NormalText>
            </S.CategoryAndDateContainer>
            <S.ValueText isExpense={isExpense}>{isExpense ? "- " : "+ "}{fortmatToBRL(value)}</S.ValueText>
        </S.RecordCardContainer>
    )
}