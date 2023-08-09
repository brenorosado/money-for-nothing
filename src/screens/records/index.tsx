import * as S from "./styles";
import { RecordButton } from "../../components/RecordButton";

export const RecordsScreen = () => {
    return (
        <>
            <S.RecordsScreenContainer
                ListHeaderComponent={() => (
                    <S.RecordsHeaderContainer>
                        <S.RecordsTitle>Records Screen</S.RecordsTitle>
                    </S.RecordsHeaderContainer>
                )}
            />
            <RecordButton />
        </>
    )
}