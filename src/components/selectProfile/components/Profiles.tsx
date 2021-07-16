import React from "react";
import { ProfileI } from "../../../api/onboarding.api";
import Profile from "./Profile";
import { ProfilesContainer } from "./profiles.styles";

interface PropsI {
  profiles: ProfileI[];
}

const Profiles = ({ profiles }: PropsI) => (
  <ProfilesContainer>
    {profiles.map((profile) => (
      <Profile key={profile.id} profile={profile} />
    ))}
  </ProfilesContainer>
);

export default Profiles;
