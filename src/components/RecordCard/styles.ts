import styled from "styled-components/native";

export const RecordCardContainer = styled.TouchableOpacity<{ isExpense: boolean }>`
    border: 1px solid ${({ theme }) => theme.colors.main};
    padding: 8px;
    border-radius: 8px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CategoryAndDateContainer = styled.View`
    justify-content: space-between;
`;

export const NormalText = styled.Text`
    color: ${({ theme }) => theme.colors.main};
    font-size: 16px;
    font-weight: bold;
`;

export const ValueText = styled.Text<{ isExpense: boolean }>`
    font-weight: bold;
    font-size: 20px;
    color: ${({ isExpense }) => isExpense ? "lightcoral" : "lightgreen"};
`;