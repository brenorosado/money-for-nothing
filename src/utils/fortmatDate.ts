export const formatToBrazilianDate = (date: string) => {
    if(!date) return "";
    const [year, month, day] = date.split('T')[0].split("-");
    return day + "/" + month + "/" + year;
}

export const localeDate = (
    languageTag: string = "pt-BR",
    timeZone: string = 'America/Sao_paulo',
    date: string = new Date().toISOString()
) => {
    return new Date(date).toLocaleDateString(
        languageTag,
        {
            timeZone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }
    );
}