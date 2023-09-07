import styled from "styled-components/native";

export const RecordsScreenContainer = styled.FlatList`
  flex: 1;
  position: relative;
  padding: 16px;
  ${({ theme }) => `
    background: ${theme.colors.secundary};
  `}
`;

export const RecordsHeaderContainer = styled.View`
  padding: 16px;
`;

export const RecordsTitle = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-weight: bold;
  font-size: 20px;
`;

export const ListSeparator = styled.View`
  height: 16px;
`;