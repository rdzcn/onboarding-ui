import React from "react";
import {
  SelectLanguageContainer,
  Txt,
  ButtonGroup,
} from "./selectLanguage.styles";
import Select from "../../lib/select/Select";
import Button from "../../lib/button/Button";

// const LANGUAGES = {
//   english: {
//     id: "english",
//     text: "English",
//   },
//   german: {
//     id: "german",
//     text: "Deutsch",
//   },
// };

const SelectLanguage = () => (
  <SelectLanguageContainer>
    <Txt>Please select your language</Txt>
    <Select />
    <ButtonGroup>
      <Button>Next</Button>
    </ButtonGroup>
  </SelectLanguageContainer>
);

export default SelectLanguage;
