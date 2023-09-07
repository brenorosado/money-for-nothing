import * as S from "./styles";
import { Animated } from "react-native";
import { useRef, useEffect, useState } from "react";

export type RecordTypeSelectorProps = {
    recordType: "EXPENSE" | "INCOMING";
    setRecordType: (n: RecordTypeSelectorProps['recordType']) => void;
}


export const RecordTypeSelector = ({
    recordType,
    setRecordType 
}: RecordTypeSelectorProps) => {
    const [slideSize, setSlideSize] = useState<number>(100);
    const slideAnimation = useRef(new Animated.Value(0)).current;

    const onSelectRecord = (value: RecordTypeSelectorProps['recordType']) => {
        Animated.timing(slideAnimation, {
          toValue: value === "EXPENSE" ? 0 : 1,
          duration: 100,
          useNativeDriver: true,
        }).start();
        setRecordType(value);
    }

    return (
        <S.RecordTypeSelectorContainer
            onLayout={(event) => {
                const {width} = event.nativeEvent.layout;
                setSlideSize(width / 2);
            }}
        >
            <S.RecordType onPress={() => onSelectRecord("EXPENSE")}>
                <S.RecordTypeText selected={recordType === "EXPENSE"}>
                    EXPENSE
                </S.RecordTypeText>
            </S.RecordType>
            <S.RecordType onPress={() => onSelectRecord("INCOMING")}>
                <S.RecordTypeText selected={recordType === "INCOMING"}>
                    INCOMING
                </S.RecordTypeText>
            </S.RecordType>
            <S.SelectedRecordTypeIndicator
                isExpense={recordType === "EXPENSE"}
                style={{
                    transform: [{
                        translateX: slideAnimation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, slideSize]
                        })
                    }]
                }}
            />
        </S.RecordTypeSelectorContainer>
    )
}