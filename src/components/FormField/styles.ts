import styled from "styled-components/native";

export const FormFieldContainer = styled.View`
    border-radius: 16px;
    gap: 4px;
`;  

export const TextField = styled.TextInput`
    padding: 8px 16px;
    border-radius: 4px;
    ${({ theme }) => {
        const { aux13, main } = theme.colors;
        return `
            border: 1px solid ${aux13};
            color: ${main};
        `;
    }}
`;

export const Label = styled.Text`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.aux13};
`;