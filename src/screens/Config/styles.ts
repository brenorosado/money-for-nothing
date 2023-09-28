import styled from "styled-components/native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export const ConfigScreenContainer = styled.View`
    flex: 1;
    padding: 0px 16px;
    gap: 16px;  
    background: ${({ theme }) => theme.colors.screenBackground};
`;

export const ConfigScreenHeaderContainer = styled.View`
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.screenBackground};
`;

export const ConfigScreenTitle = styled.Text`
  color: ${({ theme }) => theme.colors.mainText};
  font-weight: 700;
  font-size: 24px;
`;

export const ThemeIcon = styled(Ionicons).attrs({
    name: "contrast",
    size: 24,
  })`
    color: ${({ theme }) => theme.colors.mainText};
    opacity: 0.7;
    justify-content: center;
    align-items: center;
    `;
    
export const LanguageIcon = styled(Ionicons).attrs({
    name: "language",
    size: 24,
})`
    color: ${({ theme }) => theme.colors.mainText};
    opacity: 0.7;
    justify-content: center;
    align-items: center;
`;

export const CurrencyIcon = styled(FontAwesome5).attrs({
    name: "coins",
    size: 24,
})`
    color: ${({ theme }) => theme.colors.mainText};
    opacity: 0.7;
    justify-content: center;
    align-items: center;
`;