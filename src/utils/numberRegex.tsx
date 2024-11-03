export const numberValidRegex = (value: string | number) => {
  return value.toString().replace(/[^0-9]/g, "");
};
export const numberValidRegexCurrency = (value: string | number) => {
  if (value) {
    //@ts-ignore
    const numberic = value.replaceAll(",", "");
    const result = numberic.replace(/[^0-9,\.]/g, "");
    return Number(result).toLocaleString("en-US");
  } else {
    return "";
  }
};
