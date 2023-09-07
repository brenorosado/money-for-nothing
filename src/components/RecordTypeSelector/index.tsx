import * as S from "./styles";

export type RecordTypeSelectorProps = {
    recordType: "EXPENSE" | "INCOMING";
    setRecordType: (n: RecordTypeSelectorProps['recordType']) => void;
}

export const RecordTypeSelector = ({
    recordType,
    setRecordType 
}: RecordTypeSelectorProps) => {
    return (
        <S.RecordTypeSelectorContainer>
            <S.RecordType>
                <S.RecordTypeText onPress={() => setRecordType("EXPENSE")}>
                    EXPENSE
                </S.RecordTypeText>
            </S.RecordType>
            <S.RecordType>
                <S.RecordTypeText onPress={() => setRecordType("INCOMING")}>
                    INCOMING
                </S.RecordTypeText>
            </S.RecordType>
            <S.SelectedRecordTypeIndicator isExpense={recordType === "EXPENSE"} />
        </S.RecordTypeSelectorContainer>
    )
}