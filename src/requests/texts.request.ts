/* eslint-disable import/prefer-default-export */

import contentfulClient from "../api/contentful.api";
import { mapKeysToContent, TextContent } from "./helpers/mapKeysToContent";

export enum Locales {
  GERMAN = "de-DE",
  ENGLISH = "en-US",
}

export type Locale = {
  locale: Locales;
};

const fetchSimpleTexts = (locale: string) => {
  const response = contentfulClient.getEntries<TextContent>({
    content_type: "text",
    locale,
    limit: 500,
  });
  return response;
};

export const fetchTexts = async (locale: string) =>
  fetchSimpleTexts(locale).then((texts) => ({
    texts: mapKeysToContent(texts.items, "id"),
  }));
