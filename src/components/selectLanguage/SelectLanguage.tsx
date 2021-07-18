import React from "react";
import { useTranslation } from "react-i18next";
import {
  SelectLanguageContainer,
  Txt,
  ButtonGroup,
} from "./selectLanguage.styles";
import Select from "../../lib/select/Select";
import Button from "../../lib/button/Button";

const SelectLanguage = () => {
  const { t } = useTranslation();

  return (
    <SelectLanguageContainer>
      <Txt>{t("selectLanguage")}</Txt>
      <Select />
      <ButtonGroup>
        <Button href="/landing/profiles">{t("next")}</Button>
      </ButtonGroup>
    </SelectLanguageContainer>
  );
};
export default SelectLanguage;
