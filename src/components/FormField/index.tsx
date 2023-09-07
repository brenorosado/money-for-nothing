import { Controller, Control, RegisterOptions } from "react-hook-form";
import { TextInput } from "react-native";
import * as S from "./styles";

type FormFieldProps = {
    control: Control<any>;
    rules?: RegisterOptions;
    placeholder?: string;
    label?: string;
    name: string;
    error?: string | undefined;
}

export const FormField = ({
    control, 
    rules,
    placeholder,
    label,
    name,
    error
}: FormFieldProps
) => {
    return (
        <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
                <S.FormFieldContainer>
                    <S.Label>{label}</S.Label>
                    <S.TextField
                        placeholder={placeholder}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                        placeholderTextColor="gray"
                    />
                </S.FormFieldContainer>
            )}
            name={name}
            rules={rules}
        />
    )
}