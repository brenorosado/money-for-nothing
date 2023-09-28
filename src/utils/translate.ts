
import PortugueseLabels from "../locale/pt-BR.json";
import EnglishLabels from "../locale/en-US.json";

type LanguageOptions = "pt-BR" | "en-US";

const languageLabelsDecider = (language) => {
    const labels = {
        "pt-BR": PortugueseLabels,
        "en-US": EnglishLabels
    }

    return labels[language]
}

export const translate = (
    language: LanguageOptions,
    label: string
) => {
    return languageLabelsDecider(language)[label] ?? "";
}