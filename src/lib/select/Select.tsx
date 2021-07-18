import React from "react";
import { SelectContainer } from "./select.styles";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useTexts } from "../../contexts/text.context";

interface PropsI {
  isHeader?: boolean;
}

const Select = ({ isHeader = false }: PropsI) => {
  const [getStoredLng] = useLocalStorage<string>("language", "en-US");
  const { setLanguageData } = useTexts();

  const onChange = (e: any) => {
    setLanguageData(e.target.value);
  };

  return (
    <SelectContainer onChange={onChange} isHeader={isHeader}>
      <option key="english" selected={getStoredLng() === "en-US"} value="en-US">
        English
      </option>
      <option key="german" selected={getStoredLng() === "de-DE"} value="de-DE">
        Deutsch
      </option>
    </SelectContainer>
  );
};

export default Select;
