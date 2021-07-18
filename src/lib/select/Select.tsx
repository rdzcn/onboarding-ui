import React from "react";
import { SelectContainer } from "./select.styles";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useTexts } from "../../contexts/text.context";

const Select = () => {
  const [getStoredLng] = useLocalStorage<string>("lng", "en-US");
  const { setLanguageData } = useTexts();

  const onChange = (e: any) => {
    setLanguageData(e.target.value);
  };

  return (
    <SelectContainer onChange={onChange}>
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
