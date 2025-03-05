export const useUtilities = () => {
  function toTitleCase(text: string) {
    return text.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
  }

  return {
    toTitleCase,
  };
};
