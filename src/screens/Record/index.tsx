import { useState, useEffect, useCallback } from "react";
import { useConfig } from "../../contexts/Config";
import { useForm } from "react-hook-form";
import { Record } from "../../models/Records";
// import { translateLabel } from "../../utils/translate";
import { RecordTypeSelector } from "../../components/RecordTypeSelector";
import { FormField } from "../../components/FormField";
import * as S from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RecordsStackParamList } from "src/navigation/Stacks/RecordsStack";
import { Loading } from "../../components/Loading";
import { Button } from "../../components";
import { ScrollViewProps } from "react-native";
import { getLocales, getCalendars } from 'expo-localization';
import { localeDate } from "../../utils/fortmatDate";

type FormProps = {
    localId: undefined | number;
    type: "INCOMING" | "EXPENSE",
    title: string;
    category: string;
    value: string;
    occurredAt: string;
    description: string;
}

const DefaultValues: FormProps = {
    localId: undefined,
    type: "EXPENSE",
    title: "",
    category: "",
    value: "",
    occurredAt: new Date().toISOString(),
    description: ""
}

export const RecordScreen = ({ route, navigation }: NativeStackScreenProps<RecordsStackParamList, 'Record'>) => {
    const [loading, setLoading] = useState<boolean>(true);
    const { config } = useConfig();
    const { language } = config;
    const { localId } = route.params;

    const {
        control,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
        reset
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

    const loadRecord = useCallback(async () => {
        if(typeof localId === "undefined") {
            setLoading(false);
            return;
        }

        const localRecord = await Record.getByLocalId(localId);
        reset({...localRecord, value: localRecord.value.toString()});
        setLoading(false);
    }, [localId])

    useEffect(() => {
        loadRecord();
    }, [localId])

    console.log("getLocales", getLocales())
    console.log("getCalendars", getCalendars())

    return (
        <>
            <S.RecordFormScreen
                stickyHeaderIndices={[0]}
            > 
                <S.RecordHeaderContainer>
                    <S.RecordTitle>New Record</S.RecordTitle>
                    <Button text="Cancel" onPress={() => navigation.goBack()} />
                </S.RecordHeaderContainer>
                <S.RecordFormContainer>
                    {watch("type") && <RecordTypeSelector
                        recordType={watch("type")}
                        setRecordType={(newRecordType) => {
                            setValue("type", newRecordType)
                        }}
                    />
        }
                    <FormField
                        formTypes={DefaultValues}
                        control={control} 
                        placeholder="Gas, pizza, dinner, etc..."
                        name="title"
                        label="Title"
                        rules={{
                            required: {
                                value: true,
                                message: "Required field."
                            }
                        }}
                        error={errors?.title?.message}
                    />

                    <FormField
                        formTypes={DefaultValues}
                        control={control} 
                        placeholder="Aluguel, supermercado, gasolina, etc..."
                        name="category"
                        label="Category"
                        rules={{
                            required: {
                                value: true,
                                message: "Campo categoria obrigatório."
                            }
                        }}
                        error={errors?.category?.message}
                    />

                    <FormField
                        formTypes={DefaultValues}
                        control={control}
                        placeholder="R$ 0,00"
                        name="value"
                        label="Value"
                        rules={{
                            required: {
                                value: true,
                                message: "Campo valor obrigatório."
                            }
                        }}
                        error={errors?.value?.message}
                    />

                    <FormField
                        formTypes={DefaultValues}
                        control={control}
                        placeholder="17/09/2023"
                        name="occurredAt"
                        label="Date"
                        rules={{
                            required: {
                                value: true,
                                message: "Required field."
                            }
                        }}
                        setValue={setValue}
                        type="datetime"
                        mask={(value) => localeDate("pt-BR", "America/Sao_paulo", value)}
                        error={errors?.occurredAt?.message}
                    />

                    <FormField
                        formTypes={DefaultValues}
                        control={control}
                        placeholder="Insert additional information..."
                        name="description"
                        label="Description"
                        rules={{
                            required: {
                                value: true,
                                message: "Required field."
                            }
                        }}
                        error={errors?.description?.message}
                        multiline={true}
                        textAlignVertical="top"
                    />
                    
                </S.RecordFormContainer>
                <S.Footer />
            </S.RecordFormScreen>
            <S.AddRecordButton onPress={handleSubmit(onSave)}>
                <S.AddRecordText>Save</S.AddRecordText>
            </S.AddRecordButton>
        </>
    )
}