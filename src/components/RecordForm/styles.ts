import styled from "styled-components/native";
import { Dimensions } from "react-native";

const {width, height} = Dimensions.get("screen");

export const RecordFormOverLay = styled.View`
    border: 1px solid red;
    width: ${width}px;
    height: ${height}px;
    background: rgba(0, 0, 0, 0.7);
    align-items: center;
    justify-content: center;
    padding: 16px;
`;

export const RecordFormContainer = styled.View`
    background: ${({ theme }) => theme.colors.main};
    padding: 16px;
    border-radius: 16px;
    width: 100%;
`;

export const RecordHeaderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const RecordTitle = styled.Text`
    color: ${({ theme }) => theme.colors.secundary};
    font-size: 16px;
    font-weight: 500;
`;