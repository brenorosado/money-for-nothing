import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ConfigContextProviderProps = {
    children: ReactNode;
};

export type ConfigProps = {
    language: "english" | "portuguese";
    theme: "default" | "light" | "dark";
}

type ConfigContextData = {
    config: ConfigProps;
    selectLanguage: (newLanguage: ConfigProps["language"]) => Promise<void>;
    selectTheme: (newTheme: ConfigProps["theme"]) => Promise<void>;
}

const defaultValues: ConfigProps = {
    language: "english",
    theme: "default"
}

const ConfigContext = createContext({} as ConfigContextData);

export const ConfigContextProvider = ({
    children
}: ConfigContextProviderProps) => {
    const [config, setConfig] = useState<ConfigProps>(defaultValues)

    const selectLanguage = async (newLanguage: ConfigProps["language"]) => {
        setConfig(prevState => ({ ...prevState, language: newLanguage }));
        await AsyncStorage.setItem("@money-for-nothing:language", newLanguage);
    }

    const selectTheme = async (newTheme: ConfigProps["theme"]) => {
        setConfig(prevState => ({ ...prevState, theme: newTheme }));
        await AsyncStorage.setItem("@money-for-nothing:theme", newTheme)
    }

    const loadPreviousConfig = async () => {
        const previousLanguage = 
            await AsyncStorage.getItem("@money-for-nothing:language") as ConfigProps["language"];
        const previousTheme =
            await AsyncStorage.getItem("@money-for-nothing:theme") as ConfigProps["theme"];
    
        setConfig({
            language: previousLanguage || defaultValues.language,
            theme: previousTheme || defaultValues.theme
        });
    }

    useEffect(() => {
        loadPreviousConfig();
    }, []);

    return (
        <ConfigContext.Provider
            value={{
                config,
                selectLanguage,
                selectTheme
            }}
        >
            {children}
        </ConfigContext.Provider>
    );
}

export const useConfig = () => {
    const context = useContext(ConfigContext);

    return context;
}