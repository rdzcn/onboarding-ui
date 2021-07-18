import React from "react";
import { SelectLanguageContainer, ButtonGroup } from "./selectLanguage.styles";
import Select from "../../lib/select/Select";
import Button from "../../lib/button/Button";
import { Txt } from "../../contexts/text.context";

const SelectLanguage = () => (
  <SelectLanguageContainer>
    <Txt txtKey="selectLanguage" />
    <Select />
    <ButtonGroup>
      <Button href="/landing/profiles">
        <Txt txtKey="next" />
      </Button>
    </ButtonGroup>
  </SelectLanguageContainer>
);
export default SelectLanguage;
