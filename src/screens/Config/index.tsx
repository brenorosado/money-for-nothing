import { useConfig, ConfigProps } from "../../contexts/Config";
import * as S from "./styles";
import { ConfigSelect } from "../../components/ConfigSelect";
import { translate } from "../../utils/translate";

const languageOptions: {
    label: string;
    value: ConfigProps["language"]
}[] = [
    {
        label: "English",
        value: "en"
    },
    {
        label: "Português - BR",
        value: "pt-BR"
    }
];

export const ConfigScreen = () => {
    const { config, selectLanguage, selectTheme } = useConfig();
    const { language, theme } = config;

    const themeOptions: {
        label: string;
        value: ConfigProps["theme"]
    }[] = [
        {
            label: translate(language, "configThemeDarkOption"),
            value: "dark"
        },
        {
            label: translate(language, "configThemeDefaultOption"),
            value: "default"
        },
        {
            label: translate(language, "configThemeLightOption"),
            value: "light"
        }
    ];

    return ( 
        <S.ConfigScreenContainer>
            <S.ConfigScreenHeaderContainer>
                <S.ConfigScreenTitle>{translate(language, "configScreenTitle")}</S.ConfigScreenTitle>
            </S.ConfigScreenHeaderContainer>
            <ConfigSelect
                configName={translate(language, "configLanguageOption")}
                options={languageOptions}
                selectedOption={language}
                setSelectedOption={selectLanguage}
                icon={<S.LanguageIcon />}
            />
            <ConfigSelect
                configName={translate(language, "configThemeOption")}
                options={themeOptions}
                selectedOption={theme}
                setSelectedOption={selectTheme}
                icon={<S.ThemeIcon />}
            />
        </S.ConfigScreenContainer>
    )
}