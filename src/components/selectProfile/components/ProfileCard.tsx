import React from "react";
import { ProfileI } from "../../../api/onboarding.api";
import { useProfiles } from "../../../contexts/profile.context";
import { Txt } from "../../../contexts/text.context";
import { ProfileSelector, Avatar, ProfileCardWrapper } from "./profiles.styles";

interface PropsI {
  profile: ProfileI;
}
const ProfileCard = ({ profile }: PropsI) => {
  const { id, first_name: firstName, avatar: avatarUrl } = profile;
  const { setProfileIdData, profileId } = useProfiles();

  const selectProfile = (e: any) => {
    setProfileIdData(+e.currentTarget.value);
  };

  return (
    <ProfileCardWrapper isFocus={profileId === id}>
      <ProfileSelector
        as="button"
        value={id}
        type="button"
        onClick={selectProfile}
      >
        <Avatar src={avatarUrl} alt={`${firstName} profile photo`} />
        <Txt txtKey={firstName} />
      </ProfileSelector>
    </ProfileCardWrapper>
  );
};

export default ProfileCard;
