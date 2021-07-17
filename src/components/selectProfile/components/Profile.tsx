import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { ProfileI } from "../../../api/onboarding.api";
import { useProfiles } from "../../../contexts/profile.context";
import { ProfileWrapper, Avatar, Txt } from "./profiles.styles";

interface PropsI {
  profile: ProfileI;
}
const Profile = ({ profile }: PropsI) => {
  const { first_name: firstName, avatar: avatarUrl } = profile;
  const { profileId, setProfileId } = useProfiles();
  const history = useHistory();

  useEffect(() => {
    if (profileId) {
      history.push("/welcome");
    }
  }, [profileId]);

  const selectProfile = (e: any) => setProfileId(+e.target.value);

  return (
    <>
      <ProfileWrapper as="button" type="button" onClick={selectProfile}>
        <Avatar src={avatarUrl} alt={`${firstName} profile photo`} />
        <Txt>{firstName}</Txt>
      </ProfileWrapper>
    </>
  );
};

export default Profile;
