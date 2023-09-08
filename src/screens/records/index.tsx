import { useState, useEffect } from "react";
import * as S from "./styles";
import { RecordButton } from "../../components/RecordButton";
import { Record, IRecord } from "../../models/Records";
import { RecordCard } from "../../components/RecordCard";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RecordsStackParamList } from "../../navigation/Stacks/RecordsStack";

export const RecordsScreen = (
    { navigation }: {
        navigation: NativeStackNavigationProp<RecordsStackParamList>
    }
) => {
    const [records, setRecords] = useState<IRecord[]>([]);

    const loadRecords = async () => {
        const records = await Record.getRecordList();
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
                        <S.RecordsTitle>Records</S.RecordsTitle>
                    </S.RecordsHeaderContainer>
                )}
                ItemSeparatorComponent={<S.ListSeparator />}
                data={records}
                renderItem={({ item }) => <RecordCard record={item} navigation={navigation} />}
            />
            <RecordButton navigation={navigation} />
        </>
    )
}