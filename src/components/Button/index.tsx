import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

interface ButtonProps extends TouchableOpacityProps {
    text: string;
}

export const Button = ({ text, ...props }: ButtonProps) => {
    return (
        <S.ButtonContainer {...props}>
            <S.ButtonText>{text}</S.ButtonText>
        </S.ButtonContainer>
    )
}