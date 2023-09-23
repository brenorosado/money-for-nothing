import { useState, useEffect } from "react";
import * as S from "./styles";
import { Record, IRecord } from "../../models/Records";
import { RecordCard } from "../../components/RecordCard";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RecordsStackParamList } from "../../navigation/Stacks/RecordsStack";
import { Button } from "../../components";

export const RecordsScreen = (
    { navigation }: {
        navigation: NativeStackNavigationProp<RecordsStackParamList>
    }
) => {
    const [records, setRecords] = useState<IRecord[]>([]);

    const loadRecords = async () => {
        const records = await Record.getRecordList();
        console.log("records", records)
        if(records.length > 0) {
            setRecords(prevState => [...prevState, ...records]);
        }
    }

    useEffect(() => {
        loadRecords();
    }, [])

    return (
        <>
            <S.RecordsScreenContainer
                ListHeaderComponent={() => (
                    <S.RecordsHeaderContainer>
                        <S.HeaderTextsContainer>
                            <S.RecordsTitle>Total</S.RecordsTitle>
                            <S.TotalValueText>$3,400.76</S.TotalValueText>
                        </S.HeaderTextsContainer>
                        <Button
                            text="New" 
                            onPress={() => navigation.navigate("Record", { localId: undefined })}
                        />
                    </S.RecordsHeaderContainer>
                )}
                ItemSeparatorComponent={<S.ListSeparator />}
                data={records}
                renderItem={({ item }) => <RecordCard record={item} navigation={navigation} />}
            />
        </>
    )
}