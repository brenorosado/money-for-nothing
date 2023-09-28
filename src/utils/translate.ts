
import PortugueseLabels from "../locale/pt-BR.json";
import EnglishLabels from "../locale/en.json";

type LanguageOptions = "pt-BR" | "en";

const languageLabelsDecider = (language) => {
    const labels = {
        "pt-BR": PortugueseLabels,
        "en": EnglishLabels
    }

    return labels[language]
}

export const translate = (
    language: LanguageOptions,
    label: string
) => {
    return languageLabelsDecider(language)[label] ?? "";
}