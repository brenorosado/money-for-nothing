import { Controller, Control, RegisterOptions } from "react-hook-form";
import { TextInputProps } from "react-native";
import * as S from "./styles";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";
import { AntDesign } from '@expo/vector-icons'; 
import { useConfig } from "../../contexts/Config";
import { darkTheme } from "../../theme/darkTheme";
import { lightTheme } from "../../theme/lightTheme";
import { SetFieldValue, FieldValues } from "react-hook-form";

interface FormFieldProps extends TextInputProps {
    formTypes: FieldValues;
    control: Control<any>;
    rules?: RegisterOptions;
    label?: string;
    name: string;
    error?: string | undefined;
    mask?: (d: string) => string;
    type?: "number" | "text" | "datetime";
    setValue?: SetFieldValue<FormFieldProps['formTypes']>;
}

export const FormField = ({
    control, 
    rules,
    placeholder,
    label,
    name,
    error,
    type = "text",
    setValue,
    mask,
    ...props
}: FormFieldProps
) => {
    const [showDateTimePicker, setShowDateTimePicker] = useState<boolean>(false);

    const { config: { theme } } = useConfig();
    const colorTheme = (theme === "dark" ? darkTheme : lightTheme).colors;
    return (
        <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
                <>
                    {type === "datetime" && showDateTimePicker && 
                        <DateTimePicker
                            onTouchCancel={() => setShowDateTimePicker(false)}
                            value={new Date(value)}
                            onChange={(nativeEvent, dateValue) => {
                                console.log("dateValue", dateValue)
                                console.log("typeof dateValue", typeof dateValue)
                                onChange(dateValue.toISOString());
                                setShowDateTimePicker(false);
                            }}
                        /> 
                    }
                    <S.FormFieldWrapper>
                        <S.Label>{label}</S.Label>
                        <S.FormFieldContainer>
                            <S.TextField
                                {...props}
                                placeholder={placeholder}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={!!mask ? mask(value) : value}
                                placeholderTextColor="gray"
                                editable={type !== "datetime"}
                            />
                            {type === "datetime" && (
                                <S.IconContainer onPress={() => setShowDateTimePicker(true)}>
                                    <AntDesign name="calendar" size={24} color={colorTheme.mainText} />
                                </S.IconContainer>
                            )}
                        </S.FormFieldContainer>
                    </S.FormFieldWrapper>
                </>
            )}
            name={name}
            rules={rules}
        />
    )
}