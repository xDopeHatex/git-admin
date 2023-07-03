import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { detect, fromStorage, fromNavigator } from "@lingui/detect-locale";

import { useEffect } from "react";

export async function dynamicActivate(locale: string) {
  const { messages } = await import(`../../locales/${locale}/messages`);
  i18n.load(locale, messages);
  i18n.activate(locale);
}

const LANGUAGES = ["en", "ru", "uz"];

const DEFAULT_FALLBACK = () => "en";

export const withLingui = (component: () => React.ReactNode) => () => {
  useEffect(() => {
    const result = detect(
      fromStorage("language"),

      LANGUAGES.find((item: string) => {
        return item === fromNavigator().slice(0, 2);
      }),
      DEFAULT_FALLBACK
    );

    dynamicActivate(result!);
  }, []);

  return <I18nProvider i18n={i18n}>{component()}</I18nProvider>;
};
