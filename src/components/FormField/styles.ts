import styled from "styled-components/native";

export const FormFieldContainer = styled.View`
    border: ${({ theme }) => theme.colors.aux};
    border-radius: 16px;
`;  

export const TextField = styled.TextInput`
    padding: 8px 16px;
    color: ${({ theme }) => theme.colors.main};
`;

export const Label = styled.Text`
    ${({ theme }) => `
        background: ${theme.colors.secundary};
        color: ${theme.colors.aux};
    `};
    position: absolute;
    top: -10px;
    left: 12px;
    zIndex: 99;
    padding: 0 4px;
`;