import * as S from "./styles";
import { useState } from "react";

type ConfigSelectProps = {
    configName: string;
    options: {
        value: string;
        label: string;
    }[];
    selectedOption: string;
    setSelectedOption: (o: string) => void;
    icon: JSX.Element;
}

export const ConfigSelect = ({
    configName,
    options,
    selectedOption,
    setSelectedOption,
    icon
}: ConfigSelectProps
) => {
    const [showOptions, setShowOptions] = useState<boolean>(false);

    return (
        <S.ConfigSelectContainer>
        <S.ConfigSelectHeader
            onPress={() => setShowOptions(prevState => !prevState)}
        >
            {icon}
            <S.ConfigSelectHeaderText>
                {configName}: {options.find(l => l.value === selectedOption)?.label || "-"}
            </S.ConfigSelectHeaderText>
        </S.ConfigSelectHeader>
        {showOptions && 
            options.map(({ value, label }, index) => (
                <S.ConfigOption
                    key={value}
                    onPress={() => {
                        setSelectedOption(value);
                    }}
                    lastElement={index === options.length - 1}
                >
                    <S.ConfigOptionText>{label}</S.ConfigOptionText>
                </S.ConfigOption>
        ))}
    </S.ConfigSelectContainer>
    )
}