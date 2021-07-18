import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { SelectProfileContainer, ButtonGroup } from "./selectProfile.styles";
import { Header } from "../../pages/landing/landing.styles";
import Button from "../../lib/button/Button";
import getProfiles from "../../requests/profiles.request";
import { ProfileI } from "../../api/onboarding.api";
import Profiles from "./components/Profiles";
import { useProfiles } from "../../contexts/profile.context";
import { Txt } from "../../contexts/text.context";

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
      <Header txtKey="Step 2" />
      <Txt txtKey="chooseProfile" />
      {profiles && <Profiles profiles={profiles} />}
      <ButtonGroup>
        <Button buttonType="secondary" onClick={back}>
          <Txt txtKey="back" />
        </Button>
        <Button onClick={next}>
          <Txt txtKey="next" />
        </Button>
      </ButtonGroup>
    </SelectProfileContainer>
  );
};

export default SelectProfile;
