import styled from "styled-components/native";

export const RecordsScreenContainer = styled.FlatList`
  flex: 1;
  position: relative;
  padding: 0px 16px;
  ${({ theme }) => `
    background: ${theme.colors.screenBackground};
  `}
`;

export const RecordsHeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

export const HeaderTextsContainer = styled.View`
  gap: 4px;
`;

export const RecordsTitle = styled.Text`
  color: ${({ theme }) => theme.colors.mainText};
  font-weight: bold;
  font-size: 20px;
`;

export const TotalValueText = styled(RecordsTitle)`
font-size: 24px;
`;

export const ListSeparator = styled.View`
  height: 16px;
`;