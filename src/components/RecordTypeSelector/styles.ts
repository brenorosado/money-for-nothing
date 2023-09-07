import styled from "styled-components/native";

export const RecordTypeSelectorContainer = styled.View`
    flex-direction: row;
    border-radius: 16px;
    background: ${({ theme }) => theme.colors. secundary};
`;

export const SelectedRecordTypeIndicator = styled.View<{ isExpense: boolean }>`
    position: absolute;
    height: 100%;
    width: 50%;
    background: lightgray;
    zIndex: 98;
    border-radius: 16px;

    ${({ isExpense }) => isExpense ? `
        left: 0;
        background: red;
        ` : `
        right: 0;
        background: green;
    `}
`;

export const RecordType = styled.View`
    padding: 16px;
    width: 50%;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    zIndex: 99;
`;

export const RecordTypeText = styled.Text`
    color: ${({ theme }) => theme.colors.main};
`;
