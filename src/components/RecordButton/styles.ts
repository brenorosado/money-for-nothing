import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons'; 

export const NewRecordFloatinButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 48px;
    right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;


    background: ${({ theme }) => theme.colors.main};

    width: 64px;
    height: 64px;
    border-radius: 32px;

    elevation: 8;
    zIndex: 99;
`;

export const PlusIcon = styled(Ionicons).attrs({
    name: "add",
    size: 40,
})`
    color: ${({ theme }) => theme.colors.secundary};
`;