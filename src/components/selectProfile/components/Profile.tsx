import React from "react";
import { ProfileI } from "../../../api/onboarding.api";
import { useProfiles } from "../../../contexts/profile.context";
import { ProfileWrapper, Avatar, Txt } from "./profiles.styles";

interface PropsI {
  profile: ProfileI;
}
const Profile = ({ profile }: PropsI) => {
  const { id, first_name: firstName, avatar: avatarUrl } = profile;
  const { setProfileIdData } = useProfiles();

  const selectProfile = (e: any) => {
    setProfileIdData(+e.currentTarget.value);
  };

  return (
    <>
      <ProfileWrapper
        as="button"
        value={id}
        type="button"
        onClick={selectProfile}
      >
        <Avatar src={avatarUrl} alt={`${firstName} profile photo`} />
        <Txt>{firstName}</Txt>
      </ProfileWrapper>
    </>
  );
};

export default Profile;
