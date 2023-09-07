import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

const {width, height} = Dimensions.get("screen");

export const RecordFormOverLay = styled.KeyboardAvoidingView`
    width: ${width}px;
    height: ${height}px;
    background: rgba(0, 0, 0, 0.7);
    align-items: center;
    justify-content: center;
    padding: 16px;
`;

export const RecordFormContainer = styled.View`
    background: ${({ theme }) => theme.colors.main};
    padding: 16px;
    border-radius: 16px;
    width: 100%;
    gap: 16px;
`;

export const RecordHeaderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const RecordTitle = styled.Text`
    color: ${({ theme }) => theme.colors.secundary};
    font-size: 16px;
    font-weight: 500;
`;

export const CloseModalIconContainer = styled.TouchableOpacity`
    padding: 2px;
`;

export const CloseModalIcon = styled(Ionicons).attrs({
    name: "close-outline",
    size: 24,
})`
    color: ${({ theme }) => theme.colors.secundary};
`;

export const AddRecordButton = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.secundary};
    padding: 16px;
    border-radius: 16px;
`;

export const AddRecordText = styled.Text`
    color: ${({ theme }) => theme.colors.main};
`;