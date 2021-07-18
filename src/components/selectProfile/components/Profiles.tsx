import React from "react";
import { ProfileI } from "../../../api/onboarding.api";
import ProfileCard from "./ProfileCard";
import { ProfilesContainer } from "./profiles.styles";

interface PropsI {
  profiles: ProfileI[];
}

const Profiles = ({ profiles }: PropsI) => (
  <ProfilesContainer>
    {profiles.map((profile) => (
      <ProfileCard key={profile.id} profile={profile} />
    ))}
  </ProfilesContainer>
);

export default Profiles;
