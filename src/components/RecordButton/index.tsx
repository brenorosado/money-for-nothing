import { useState } from "react";
import * as S from "./styles";
import { RecordForm } from "../RecordForm";

export const RecordButton = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <>
            {showModal && <RecordForm />}
            <S.NewRecordFloatinButton
                onPress={() => setShowModal(prevState => !prevState)}
            >
                <S.PlusIcon />
            </S.NewRecordFloatinButton>
        </>
    )
}