import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ConfigContextProviderProps = {
    children: ReactNode;
};

export type ConfigProps = {
    language: "english" | "portuguese";
    theme: "default" | "light" | "dark";
    currency: "BRL" | "USD"
}

type ConfigContextData = {
    config: ConfigProps;
    selectLanguage: (newLanguage: ConfigProps["language"]) => Promise<void>;
    selectTheme: (newTheme: ConfigProps["theme"]) => Promise<void>;
    selectCurrency: (newCurrency: ConfigProps["currency"]) => Promise<void>;
}

const defaultValues: ConfigProps = {
    language: "english",
    theme: "default",
    currency: "BRL"
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

    const selectCurrency = async (newCurrency: ConfigProps["currency"]) => {
        setConfig(prevState => ({ ...prevState, currency: newCurrency }));
        await AsyncStorage.setItem("@money-for-nothing:currency", newCurrency)
    }

    const loadPreviousConfig = async () => {
        const previousLanguage = 
            await AsyncStorage.getItem("@money-for-nothing:language") as ConfigProps["language"];
        const previousTheme =
            await AsyncStorage.getItem("@money-for-nothing:theme") as ConfigProps["theme"];
        const previousCurrency =
            await AsyncStorage.getItem("@money-for-nothing:currency") as ConfigProps["currency"];
    
        setConfig({
            language: previousLanguage || defaultValues.language,
            theme: previousTheme || defaultValues.theme,
            currency: previousCurrency || defaultValues.currency
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
                selectTheme,
                selectCurrency
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