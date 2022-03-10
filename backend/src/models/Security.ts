
class Security {
    public filterScripts(text : string): string {

        text = text.toString();
        const regexRemoveScript =
        /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

        let filteredText : string = typeof text === 'string' ? text.trim() : '';
        filteredText = filteredText.replace(regexRemoveScript, "").trim();
        return filteredText;
    }
}

export default new Security();