export const required = (value) => {
    if (value) {
        return undefined
    }
    return "Field is required";
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value > maxLength) return `Maximum length is ${value} symbols`;
    return undefined;
}