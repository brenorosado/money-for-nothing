import * as S from "./styles";
import { Animated } from "react-native";
import { useRef, useState, useEffect} from "react";

export type RecordTypeSelectorProps = {
    recordType: "EXPENSE" | "INCOMING";
    setRecordType: (n: RecordTypeSelectorProps['recordType']) => void;
}

export const RecordTypeSelector = ({
    recordType,
    setRecordType 
}: RecordTypeSelectorProps) => {
    const [slideSize, setSlideSize] = useState<number>(100);
    const slideAnimation = useRef(new Animated.Value(1)).current;

    const triggerInitialAnimation = () => {
        Animated.timing(slideAnimation, {
            toValue: recordType === "EXPENSE" ? 0 : 2,
            duration: 0,
            useNativeDriver: true,
        }).start()
    }

    const onSelectRecord = (value: RecordTypeSelectorProps['recordType']) => {
        setRecordType(value);
    
        Animated.timing(slideAnimation, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
        }).start(() => {
            Animated.timing(slideAnimation, {
                toValue: value === "EXPENSE" ? 0 : 2,
                duration: 100,
                useNativeDriver: true,
            }).start()
        });
    }

    useEffect(() => {
        console.log("recordType", recordType)
        triggerInitialAnimation();
    }, [])

    return (
        <S.RecordTypeSelectorContainer
            onLayout={(event) => {
                const {width} = event.nativeEvent.layout;
                setSlideSize(width);
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
                            inputRange: [0, 1, 2],
                            outputRange: [0, slideSize / 4, slideSize / 2]
                        }),
                    },
                    {
                        scaleX: slideAnimation.interpolate({
                            inputRange: [0, 1, 2],
                            outputRange: [1, 0.1, 1]
                        })
                    }]
                }}
            />
        </S.RecordTypeSelectorContainer>
    )
}