import styled from "styled-components/native";

export const FormFieldWrapper = styled.View`
    gap: 8px;
`;

export const FormFieldContainer = styled.View`
    gap: 4px;
    border-radius: 8px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    ${({ theme }) => {
        const { mainText, mainBorder } = theme.colors;
        return `
            border: 1px solid ${mainBorder};
        `;
    }}
`;

export const IconContainer = styled.TouchableOpacity`
    padding: 10px 16px;
    border-radius: 8px;
`;

export const TextField = styled.TextInput<{ multiline?: boolean }>`
    padding: 10px 16px;
    border-radius: 8px;
    flex: 1;
    
    ${({ theme, multiline }) => {
        const { mainText } = theme.colors;
        return `
            color: ${mainText};
            ${multiline ? "min-height: 80px;" : ""}
        `;
    }}
`;

export const Label = styled.Text`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.mainText};
    font-size: 16px;
    padding-left: 2px;
`;