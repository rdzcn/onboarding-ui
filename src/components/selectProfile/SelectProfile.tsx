import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import {
  SelectProfileContainer,
  Txt,
  ButtonGroup,
} from "./selectProfile.styles";
import Button from "../../lib/button/Button";
import getProfiles from "../../requests/profiles.request";
import { ProfileI } from "../../api/onboarding.api";
import Profiles from "./components/Profiles";
import { useProfiles } from "../../contexts/profile.context";

const SelectProfile = () => {
  const [profiles, setProfiles] = useState<ProfileI[] | null>(null);
  const { profileId } = useProfiles();
  const history = useHistory();
  const back = () => {
    history.goBack();
  };
  const next = () => {
    if (profileId) {
      history.push("/welcome");
    }
  };

  const { t } = useTranslation();

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await getProfiles();
      if (!response) return null;
      setProfiles(response.data as ProfileI[]);
    };
    fetchProfiles();
  }, []);

  return (
    <SelectProfileContainer>
      <Txt>{t("chooseProfile")}</Txt>
      {profiles && <Profiles profiles={profiles} />}
      <ButtonGroup>
        <Button buttonType="secondary" onClick={back}>
          {t("back")}
        </Button>
        <Button onClick={next}>{t("next")}</Button>
      </ButtonGroup>
    </SelectProfileContainer>
  );
};

export default SelectProfile;
