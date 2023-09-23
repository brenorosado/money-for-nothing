import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
    padding: 8px 32px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    shadow-offset: 8px 8px;
    shadow-color: black;
    elevation: 1;

    ${({ theme }) => {
        const { defaultButtonsBackground } = theme.colors;
        
        return `
            background: ${defaultButtonsBackground};
        `
    }}
`;

export const ButtonText = styled.Text`
    font-size: 16px;
    font-weight: 600;

    ${({ theme }) => {
        const { buttonText } = theme.colors;

        return `
            color: ${buttonText};
        `
    }}
`;