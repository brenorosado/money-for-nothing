import { labels } from "../../labels";

type languageType = "portuguese" | "english";
type screenType = "config" | "record";

export const translateLabel = (
    language: languageType,
    screen: screenType,
    label: string
) => {
    return labels[language][screen][label] ?? "";
}