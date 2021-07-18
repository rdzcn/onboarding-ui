import { Entry } from "contentful";

export type TextContent = {
  value: string;
  id: string;
};

export function mapKeysToContent(items: Entry<TextContent>[], id: "id") {
  return items.reduce(
    (acc: { [key: string]: any }, item) => ({
      ...acc,
      [item.fields[id]]: item.fields.value,
    }),
    {},
  );
}
