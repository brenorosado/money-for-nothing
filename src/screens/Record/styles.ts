import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

export const RecordFormScreen = styled.ScrollView`
    background: ${({ theme }) => theme.colors.screenBackground};
    flex: 1;
    position: relative;
`;

export const RecordFormContainer = styled.View`
    flex: 1;
    padding: 16px;
    width: 100%;
    gap: 16px;
`;

export const RecordHeaderContainer = styled.View`
    padding: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.colors.screenBackground};
`;

export const RecordTitle = styled.Text`
    color: ${({ theme }) => theme.colors.mainText};
    font-size: 24px;
    font-weight: 700;
`;

export const CloseModalIconContainer = styled.TouchableOpacity`
    padding: 2px;
`;

export const CloseModalIcon = styled(Ionicons).attrs({
    name: "close-outline",
    size: 24,
})`
    color: ${({ theme }) => theme.colors.mainText};
`;

export const AddRecordButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 16px;
    left: 16px;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 16px;
    border-radius: 8px;
    elevation: 2;
    background: ${({ theme }) => theme.colors.defaultButtonsBackground};
    width: ${width - 32}px;
`;

export const AddRecordText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.buttonText};
`;

export const Footer = styled.View`
    height: 80px;
`;