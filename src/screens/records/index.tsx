import { useState, useEffect } from "react";
import * as S from "./styles";
import { RecordButton } from "../../components/RecordButton";
import { Record, IRecord } from "../../models/Records";
import { RecordCard } from "../../components/RecordCard";

export const RecordsScreen = () => {
    const [records, setRecords] = useState<IRecord[]>([]);

    const loadRecords = async () => {
        const records = await Record.getRecordList();
        console.log("RECORDS", records);
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
                        <S.RecordsTitle>Records Screen</S.RecordsTitle>
                    </S.RecordsHeaderContainer>
                )}
                ItemSeparatorComponent={<S.ListSeparator />}
                data={records}
                renderItem={({ item }) => <RecordCard record={item} />}
            />
            <RecordButton />
        </>
    )
}