import React, { useEffect, useState } from "react";
import {
  SelectProfileContainer,
  Txt,
  ButtonGroup,
} from "./selectProfile.styles";
import Button from "../../lib/button/Button";
import getProfiles from "../../requests/profiles.request";
import { ProfileI } from "../../api/onboarding.api";
import Profiles from "./components/Profiles";

const SelectProfile = () => {
  const [profiles, setProfiles] = useState<ProfileI[] | null>(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await getProfiles();
      if (!response) return null;
      setProfiles(response.data);
    };
    fetchProfiles();
  }, []);

  return (
    <SelectProfileContainer>
      <Txt>Choose your profile</Txt>
      {profiles && <Profiles profiles={profiles} />}
      <ButtonGroup>
        <Button buttonType="secondary">Back</Button>
        <Button>Next</Button>
      </ButtonGroup>
    </SelectProfileContainer>
  );
};

export default SelectProfile;
