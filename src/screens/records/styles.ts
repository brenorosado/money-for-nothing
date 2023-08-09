import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const RecordsScreenContainer = styled.FlatList`
  flex: 1;
  position: relative;
  ${({ theme }) => `
    background: ${theme.colors.secundary};
  `}
`;

export const RecordsHeaderContainer = styled.View`
  padding: 16px;
`;

export const RecordsTitle = styled.Text`
  color: ${({ theme }) => theme.colors.secundary};
  font-weight: bold;
  font-size: 20px;
`;