import styled from "styled-components/native";

export const FormFieldContainer = styled.View`
    border: ${({ theme }) => theme.colors.aux};
    border-radius: 16px;
`;  

export const TextField = styled.TextInput`
    padding: 8px 16px;
`;

export const Label = styled.Text`
    background: ${({ theme }) => theme.colors.main};
    position: absolute;
    top: -10px;
    left: 12px;
    zIndex: 99;
    padding: 0 4px;
`;