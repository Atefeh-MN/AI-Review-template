export const rtlLanguages = ["fa"];
export function setPageDirection(language) {
    const dir = rtlLanguages.includes(language) ? "rtl" : "ltr"
    document.documentElement.dir = dir
}