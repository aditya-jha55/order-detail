import { useTranslation } from "react-i18next";

/**
 * Custom hook for dynamic keyPrefix with useTranslation.
 *
 * @param {string} keyPrefix - The key prefix for translations.
 * @returns {Function} The translation function `t` scoped to the provided keyPrefix.
 */
export const useDTranslation = (keyPrefix: string) => {
  const { t } = useTranslation("translation", {
    keyPrefix,
  });

  return t;
};
