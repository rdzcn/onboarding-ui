import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { fetchTexts } from "../requests/texts.request";
import initI18n from "../config/init18n";
import useSessionStorage from "../hooks/useSessionStorage";
import useLocalStorage from "../hooks/useLocalStorage";

type PropertyObject = { [key: string]: any };

interface TextData {
  texts: PropertyObject;
}

interface TextContextI {
  texts: TextData | null;
  setTextData: (data: TextData) => void;
  updateTexts: () => void;
  setLanguageData: (data: string) => void;
}

const TextsContext = React.createContext<TextContextI | null>(null);

const useTexts = () => {
  const context = React.useContext(TextsContext);
  if (!context) {
    throw new Error(`useTexts must be used within a TextProvider`);
  }
  return context;
};

export interface TxtProps {
  txtKey: string;
  options?: { [key: string]: string | number };
  as?: string;
}

const SCTxt = styled.span``;

export const Txt = ({ txtKey, options, ...props }: TxtProps) => {
  const { t } = useTranslation();

  return (
    // @ts-ignore
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SCTxt data-text-key={txtKey} {...props}>
      {t(txtKey, options)}
    </SCTxt>
  );
};

type StyledProps = Omit<TxtProps, "as"> & { forwardedAs?: string };

export const StyledText = styled(Txt)<StyledProps>``;

type TextsProviderProps = PropsWithChildren<{}>;

const TextsProvider = ({ children }: TextsProviderProps) => {
  const [getStoredLang, setStoredLang] = useLocalStorage<string>(
    "language",
    "en-EN",
  );
  const [getStoredTexts, setStoredTexts] = useSessionStorage<TextData | null>(
    "texts",
    null,
  );

  const [language, setLanguage] = useState(getStoredLang());
  const [texts, setTexts] = useState(getStoredTexts());
  const [loaded, setLoaded] = useState(false);

  const setLanguageData = useCallback(
    (data) => {
      setLanguage(data);
      setStoredLang(data);
    },
    [setLanguage, setStoredLang],
  );

  const setTextData = useCallback(
    (data) => {
      setTexts(data);
      setStoredTexts(data);
    },
    [setTexts, setStoredTexts],
  );

  const updateTexts = useCallback(async () => {
    const newTexts = await fetchTexts(language as string);
    setTextData(newTexts);
    return newTexts;
  }, [setTextData, language]);

  useEffect(() => {
    updateTexts().then((txts) => {
      initI18n(txts.texts).then(() => {
        setLoaded(true);
      });
    });
  }, [updateTexts]);

  const value: TextContextI = {
    texts,
    setTextData,
    updateTexts,
    setLanguageData,
  };
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TextsContext.Provider value={value}>
      {texts && loaded && children}
    </TextsContext.Provider>
  );
};

export { TextsProvider, useTexts };
