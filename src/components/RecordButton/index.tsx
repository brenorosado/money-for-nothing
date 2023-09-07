import { useState } from "react";
import * as S from "./styles";
import { RecordForm } from "../RecordForm";

export const RecordButton = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <>
            {showModal && <RecordForm onClose={() => setShowModal(false)}/>}
            <S.NewRecordFloatinButton
                onPress={() => setShowModal(true)}
            >
                <S.PlusIcon />
            </S.NewRecordFloatinButton>
        </>
    )
}