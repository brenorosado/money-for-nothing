import styled from "styled-components/native";

export const RecordsScreenContainer = styled.FlatList`
  flex: 1;
  position: relative;
  padding: 0px 16px;
  ${({ theme }) => `
    background: ${theme.colors.aux4};
  `}
`;

export const RecordsHeaderContainer = styled.View`
  padding: 16px;
  align-items: center;
`;

export const RecordsTitle = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-weight: 500;
  font-size: 20px;
`;

export const ListSeparator = styled.View`
  height: 16px;
`;