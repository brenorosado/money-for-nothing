import { useConfig, ConfigProps } from "../../contexts/Config";
import { useState } from "react";
import * as S from "./styles";
import { translateLabel } from "../../utils/translateLabel";
import { ConfigSelect } from "../../components/ConfigSelect";

const languageOptions: {
    label: string;
    value: ConfigProps["language"]
}[] = [
    {
        label: "English",
        value: "english"
    },
    {
        label: "Português - BR",
        value: "portuguese"
    }
];

const themeOptions: {
    label: string;
    value: ConfigProps["theme"]
}[] = [
    {
        label: "Dark",
        value: "dark"
    },
    {
        label: "Default",
        value: "default"
    },
    {
        label: "Light",
        value: "light"
    }
];

const currencyOptions: {
    label: string;
    value: string;
}[] = [
    {
        label: "BRL - Real",
        value: "BRL"
    },
    {
        label: "USD - Dólar",
        value: "USD"
    }
];

export const ConfigScreen = () => {
    const { config, selectLanguage, selectTheme, selectCurrency } = useConfig();
    const { language, theme, currency } = config;

    return ( 
        <S.ConfigScreenContainer>
            <S.ConfigScreenHeaderContainer>
                <S.ConfigScreenTitle>Config</S.ConfigScreenTitle>
            </S.ConfigScreenHeaderContainer>
            <ConfigSelect
                configName="Language"
                options={languageOptions}
                selectedOption={language}
                setSelectedOption={selectLanguage}
                icon={<S.LanguageIcon />}
            />
            <ConfigSelect
                configName="Currency"
                options={currencyOptions}
                selectedOption={currency}
                setSelectedOption={selectCurrency}
                icon={<S.CurrencyIcon />}
            />
            <ConfigSelect
                configName="Theme"
                options={themeOptions}
                selectedOption={theme}
                setSelectedOption={selectTheme}
                icon={<S.ThemeIcon />}
            />
        </S.ConfigScreenContainer>
    )
}