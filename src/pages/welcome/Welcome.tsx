import React, { useEffect, useState } from "react";
import { ProfileI } from "../../api/onboarding.api";
import { Avatar } from "../../components/selectProfile/components/profiles.styles";
import { useProfiles } from "../../contexts/profile.context";
import { getProfile } from "../../requests/profiles.request";
import { WelcomeContainer } from "./welcome.styles";

const Welcome = () => {
  const [profile, setProfile] = useState<ProfileI | null>(null);

  const { profileId } = useProfiles();

  useEffect(() => {
    if (profileId) {
      const fetchProfile = async () => {
        const response = await getProfile(profileId);
        if (!response) return null;
        setProfile(response.data as ProfileI);
      };
      fetchProfile();
    }

    return () => setProfile(null);
  }, []);

  return (
    profile && (
      <WelcomeContainer>
        <Avatar src={profile.avatar} alt="profile photo" size="lg" />
      </WelcomeContainer>
    )
  );
};

export default Welcome;
