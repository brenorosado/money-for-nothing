import { useConfig } from "../../contexts/Config";
import { useForm } from "react-hook-form";
import { Record } from "../../models/Records";
import { translateLabel } from "../../utils/translateLabel";
import { RecordTypeSelector } from "../../components/RecordTypeSelector";
import { FormField } from "../../components/FormField";
import * as S from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RecordsStackParamList } from "src/navigation/Stacks/RecordsStack";

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

export const RecordScreen = ({ route, navigation }: NativeStackScreenProps<RecordsStackParamList, 'Record'>) => {
    const { config } = useConfig();
    const { language } = config;
    const { localId } = route.params;

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
            const value = parseInt(data.value.split(",")[0]) * 100 + parseInt(data.value.split(",")[1]); 
            const payload = {
                ...data,
                localCreatedAt: new Date().toISOString(),
                value
            }
            await Record.create(payload);
            navigation.goBack();
        } catch (e) {
            console.log("Error while saving record: ", e);
        }
    }

    return (
        <S.RecordFormContainer>
            <S.RecordHeaderContainer>
                <S.RecordTitle>{translateLabel(language, "record", "new record")}</S.RecordTitle>
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
    )
}