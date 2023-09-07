import * as S from "./styles";
import { Modal, Platform } from "react-native";
import { translateLabel } from "../../utils/translateLabel";
import { useConfig } from "../../contexts/Config";
import { FormField } from "../FormField";
import { useForm } from "react-hook-form";
import { RecordTypeSelector } from "../RecordTypeSelector";
import { Record } from "../../models/Records";

type RecordFormProps = {
    onClose: () => void;
}

type FormProps = {
    type: "INCOMING" | "EXPENSE",
    category: string;
    value: string;
}

const DefaultValues: FormProps = {
    type: "EXPENSE",
    category: "",
    value: ""
}

export const RecordForm = ({ onClose }: RecordFormProps) => {
    const { config } = useConfig();
    const { language } = config;

    const {
        control,
        handleSubmit,
        watch,
        setValue,
        formState: { errors }
    } = useForm({
        defaultValues: DefaultValues
    });

    const onSave = async (data) => {
        try {
            console.log("data", data);
            const value = parseInt(data.value.split(",")[0]) * 100 + parseInt(data.value.split(",")[1]); 
        
            const payload = {
                ...data,
                localCreatedAt: new Date().toISOString(),
                value
            }
            console.log("payload", JSON.stringify(payload, null, 2));
            await Record.create(payload);
            console.log("after record saving")
            onClose();
        } catch (e) {
            console.log("Error while saving record: ", e);
        }
    }
     
    console.log("errors", errors);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={true}
            statusBarTranslucent={true}
        >
            <S.RecordFormOverLay
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <S.RecordFormContainer>
                    <S.RecordHeaderContainer>
                        <S.RecordTitle>{translateLabel(language, "record", "new record")}</S.RecordTitle>
                        <S.CloseModalIconContainer onPress={onClose}>
                            <S.CloseModalIcon />
                        </S.CloseModalIconContainer>
                    </S.RecordHeaderContainer>
                    <RecordTypeSelector
                        recordType={watch("type")}
                        setRecordType={(newRecordType) => {
                            setValue("type", newRecordType)
                        }}
                    />

                    <FormField
                        control={control} 
                        placeholder="Aluguel, supermercado, gasolina, etc..."
                        name="category"
                        label="Categoria"
                        rules={{
                            required: {
                                value: true,
                                message: "Campo categoria obrigatório."
                            }
                        }}
                        error={errors?.category?.message}
                    />

                    <FormField
                        control={control}
                        placeholder="R$ 0,00"
                        name="value"
                        label="Valor"
                        rules={{
                            required: {
                                value: true,
                                message: "Campo valor obrigatório."
                            }
                        }}
                        error={errors?.value?.message}
                    />
                    
                    <S.AddRecordButton onPress={handleSubmit(onSave)}>
                        <S.AddRecordText>Add record</S.AddRecordText>
                    </S.AddRecordButton>
                </S.RecordFormContainer>
            </S.RecordFormOverLay>
        </Modal>
    )
}