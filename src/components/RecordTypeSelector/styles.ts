import styled from "styled-components/native";
import { Animated } from "react-native";

export const RecordTypeSelectorContainer = styled.View`
    flex-direction: row;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.secundary};
    border: 1px solid ${({ theme }) => theme.colors.aux12};
    overflow: hidden;
`;

export const SelectedRecordTypeIndicator = styled(Animated.View)<{ isExpense: boolean }>`
    position: absolute;
    height: 100%;
    width: 50%;
    zIndex: 98;
    border-radius: 7px;
    background: ${({ isExpense }) => isExpense ? 'lightcoral' : 'lightgreen'};
`;

export const RecordType = styled.TouchableOpacity.attrs({ 
    opacity: 1
})`
    padding: 10px 16px;
    width: 50%;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    zIndex: 99;
`;

export const RecordTypeText = styled.Text<{ selected: boolean }>`
    color: ${({ theme, selected }) => theme.colors[selected ? 'secundary' : 'main']};
    font-size: 14px;
    font-weight: bold;
`;
