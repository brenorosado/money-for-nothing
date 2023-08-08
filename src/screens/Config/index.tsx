import { useConfig, ConfigProps } from "../../contexts/Config";
import { useState } from "react";
import * as S from "./styles";
import { translateLabel } from "../../utils/translateLabel";

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
]

const themeOptions: {
    value: ConfigProps["theme"]
}[] = [
    {
        value: "dark"
    },
    {
        value: "default"
    },
    {
        value: "light"
    }
]

export const ConfigScreen = () => {
    const [showLanguageOptions, setShowLanguageOptions] = useState<boolean>(false);
    const [showThemeOptions, setShowThemeOptions] = useState<boolean>(false);

    const { config, selectLanguage, selectTheme } = useConfig();
    const { language, theme } = config;
    console.log("config", JSON.stringify(config, null, 2));

    return (
        <S.ConfigScreenContainer>
            <S.ConfigContainer>
                <S.ConfigHeader
                    onPress={() => setShowLanguageOptions(prevState => !prevState)}
                >
                    <S.LanguageIcon />
                    <S.ConfigHeaderText>{translateLabel(language, "config", "language")}: {languageOptions.find(l => l.value === language).label}</S.ConfigHeaderText>
                </S.ConfigHeader>
                {showLanguageOptions && 
                    languageOptions.map(({ value, label }, index) => (
                        <S.ConfigOption
                            key={value}
                            onPress={() => {
                                selectLanguage(value);
                            }}
                            lastElement={index === languageOptions.length - 1}
                        >
                            <S.ConfigOptionText>{label}</S.ConfigOptionText>
                        </S.ConfigOption>
                ))}
            </S.ConfigContainer>
            <S.ConfigContainer>
                <S.ConfigHeader
                    onPress={() => setShowThemeOptions(prevState => !prevState)}
                >
                    <S.ThemeIcon />
                    <S.ConfigHeaderText>{translateLabel(language, "config", "theme")}: {translateLabel(language, "config", theme)}</S.ConfigHeaderText>
                </S.ConfigHeader>
                {showThemeOptions && 
                    themeOptions.map(({ value }, index) => (
                        <S.ConfigOption
                            key={value}
                            onPress={() => {
                                selectTheme(value);
                            }}
                            lastElement={index === themeOptions.length - 1}
                        >
                            <S.ConfigOptionText>{translateLabel(language, "config", value)}</S.ConfigOptionText>
                        </S.ConfigOption>
                ))}
            </S.ConfigContainer>
        </S.ConfigScreenContainer>
    )
}