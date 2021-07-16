export interface SelectElement {
  id: string;
  text: string;
  disabled?: boolean;
}

export type KeyedElements = { [key: string]: SelectElement };
