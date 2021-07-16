import React from "react";
import { ProfileI } from "../../../api/onboarding.api";
import { ProfileWrapper, Avatar, Txt } from "./profiles.styles";

interface PropsI {
  profile: ProfileI;
}
const Profile = ({ profile }: PropsI) => {
  const { first_name: firstName, avatar: avatarUrl } = profile;
  return (
    <ProfileWrapper>
      <Avatar src={avatarUrl} alt={`${firstName} profile photo`} />
      <Txt>{firstName}</Txt>
    </ProfileWrapper>
  );
};

export default Profile;
