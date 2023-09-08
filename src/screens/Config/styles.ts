import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const ConfigScreenContainer = styled.View`
    flex: 1;
    padding: 0px 16px;
    gap: 16px;  
    background: ${({ theme }) => theme.colors.aux4};
`;

export const ConfigScreenHeaderContainer = styled.View`
  padding: 16px;
  align-items: center;
`;

export const ConfigScreenTitle = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-weight: 500;
  font-size: 20px;
`;


export const ConfigContainer = styled.View`
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors.main};
`;

export const ConfigHeader = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    gap: 16px;
    padding: 16px;
    border-radius: 16px;
`;

export const ConfigHeaderText = styled.Text`
    color: ${({ theme }) => theme.colors.main};
    font-size: 20px;
    line-height: 20px;
`;

export const ConfigOption = styled.TouchableOpacity<{ lastElement: boolean }>`
    padding: 16px;
    background: ${({ theme }) => theme.colors.aux1};

    ${({ lastElement }) => lastElement && `
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
    `}
`;

export const ConfigOptionText = styled.Text`
    color: ${({ theme }) => theme.colors.main};
`;

export const ThemeIcon = styled(Ionicons).attrs({
    name: "contrast",
    size: 24,
  })`
    color: ${({ theme }) => theme.colors.main};
    margin-bottom: 6px;
    opacity: 0.7;
`;

export const LanguageIcon = styled(Ionicons).attrs({
    name: "language",
    size: 24,
  })`
    color: ${({ theme }) => theme.colors.main};
    margin-bottom: 6px;
    opacity: 0.7;
`;