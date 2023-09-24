import styled from "styled-components/native";

export const ConfigSelectContainer = styled.View`
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors.mainText};
`;

export const ConfigSelectHeader = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    gap: 16px;
    padding: 16px;
    border-radius: 16px;
`;

export const ConfigSelectHeaderText = styled.Text`
    color: ${({ theme }) => theme.colors.mainText};
    font-size: 20px;
`;

export const ConfigOption = styled.TouchableOpacity<{ lastElement: boolean }>`
    padding: 16px;
    background: ${({ theme }) => theme.colors.screenBackground};

    ${({ lastElement }) => lastElement && `
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
    `}
`;

export const ConfigOptionText = styled.Text`
    color: ${({ theme }) => theme.colors.mainText};
`;
