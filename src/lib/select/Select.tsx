import React, { useState } from "react";
import { SelectContainer } from "./select.styles";
import useLocalStorage from "../../hooks/useLocalStorage";

const Select = () => {
  const [storedLng, setStoredLng] = useLocalStorage<string | null>(
    "lng",
    "en-US",
  );
  const [lng, setLng] = useState(storedLng);

  const onChange = (e: any) => {
    setLng(e.target.value);
    setStoredLng(e.target.value);
  };

  return (
    <SelectContainer onChange={onChange}>
      <option key="english" selected={lng === "en-US"} value="en-US">
        English
      </option>
      <option key="german" selected={lng === "de-DE"} value="de-DE">
        Deutsch
      </option>
    </SelectContainer>
  );
};

export default Select;
