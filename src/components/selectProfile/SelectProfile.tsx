import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
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
  const { setProfileData } = useProfiles();
  const history = useHistory();
  const back = () => {
    history.goBack();
  };

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await getProfiles();
      if (!response) return null;
      setProfiles(response.data as ProfileI[]);
      setProfileData(response.data as ProfileI[]);
    };
    fetchProfiles();
  }, []);

  return (
    <SelectProfileContainer>
      <Txt>Choose your profile</Txt>
      {profiles && <Profiles profiles={profiles} />}
      <ButtonGroup>
        <Button buttonType="secondary" onClick={back}>
          Back
        </Button>
        <Button>Next</Button>
      </ButtonGroup>
    </SelectProfileContainer>
  );
};

export default SelectProfile;
