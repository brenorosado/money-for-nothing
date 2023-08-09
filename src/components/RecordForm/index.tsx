import * as S from "./styles";
import { Modal } from "react-native";
import { translateLabel } from "../../utils/translateLabel";
import { useConfig } from "../../contexts/Config";

export const RecordForm = () => {
    const { config } = useConfig();
    const { language } = config;
    
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={true}
            statusBarTranslucent={true}
        >
            <S.RecordFormOverLay>
                <S.RecordFormContainer>
                    <S.RecordHeaderContainer>
                        <S.RecordTitle>{translateLabel(language, "record", "new record")}</S.RecordTitle>
                    </S.RecordHeaderContainer>
                </S.RecordFormContainer>
            </S.RecordFormOverLay>
        </Modal>
    )
}