import { TouchableOpacity, View, Text } from "react-native";
import { styles as S } from "./styles";
import { useConfig, ConfigProps } from "../../contexts/Config";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

const languageOptions: {
    value: ConfigProps["language"]
}[] = [
    {
        value: "english"
    },
    {
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
        <View style={S.container}>
            <View style={S.configContainer}>
                <TouchableOpacity
                    style={S.configHeader}
                    onPress={() => setShowLanguageOptions(prevState => !prevState)}
                >
                    <Ionicons name="language" size={24} color="black" />
                    <Text style={S.configHeaderText}>Idioma: {language}</Text>
                </TouchableOpacity>
                {showLanguageOptions && 
                    languageOptions.map(({ value }, index) => (
                        <TouchableOpacity
                            key={value}
                            style={{
                                ...S.configOption,
                                ...(index === languageOptions.length - 1 &&
                                    S.lastConfigOption
                                )
                            }}
                            onPress={() => {
                                selectLanguage(value);
                            }}
                        >
                            <Text>{value}</Text>
                        </TouchableOpacity>
                ))}
            </View>
            <View style={S.configContainer}>
                <TouchableOpacity
                    style={S.configHeader}
                    onPress={() => setShowThemeOptions(prevState => !prevState)}
                >
                    <Ionicons name="contrast" size={24} color="black" />
                    <Text style={S.configHeaderText}>Tema: {theme}</Text>
                </TouchableOpacity>
                {showThemeOptions && 
                    themeOptions.map(({ value }, index) => (
                        <TouchableOpacity
                            key={value}
                            style={{
                                ...S.configOption,
                                ...(index === themeOptions.length - 1 &&
                                    S.lastConfigOption
                                )
                            }}
                            onPress={() => {
                                selectTheme(value);
                            }}
                        >
                            <Text>{value}</Text>
                        </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}