import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';

export const RecordFormContainer = styled.View`
    flex: 1;
    background: ${({ theme }) => theme.colors.aux4};
    padding: 16px;
    width: 100%;
    gap: 16px;
`;

export const RecordHeaderContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const RecordTitle = styled.Text`
    color: ${({ theme }) => theme.colors.main};
    font-size: 20px;
    font-weight: 500;
`;

export const CloseModalIconContainer = styled.TouchableOpacity`
    padding: 2px;
`;

export const CloseModalIcon = styled(Ionicons).attrs({
    name: "close-outline",
    size: 24,
})`
    color: ${({ theme }) => theme.colors.main};
`;

export const AddRecordButton = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.aux1};
    padding: 16px;
    border-radius: 16px;
`;

export const AddRecordText = styled.Text`
    color: ${({ theme }) => theme.colors.main};
`;