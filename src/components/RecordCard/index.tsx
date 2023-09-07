import * as S from "./styles";
import { IRecord } from "../../models/Records";
import { Text } from "react-native";

export const RecordCard = ({ record }: { record: IRecord}) => {
    const { category, value } = record;

    return (
        <S.RecordCardContainer>
            <Text style={{ color: "white" }}>{category}</Text>
            <Text style={{ color: "white" }}>{value}</Text>
        </S.RecordCardContainer>
    )
}