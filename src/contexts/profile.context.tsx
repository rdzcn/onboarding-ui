import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import useSessionStorage from "../hooks/useSessionStorage";
import { ProfileI } from "../api/onboarding.api";

export type ProfileContextI = {
  profileId: number | null;
  setProfileIdData: (data: number | null) => void;
  profiles: null | ProfileI[];
  setProfileData: (data: ProfileI[] | null) => void;
};

const ProfileContext = createContext<ProfileContextI | null>(null);

const useProfiles = (): ProfileContextI => {
  const context = useContext<ProfileContextI | null>(ProfileContext);
  if (!context) {
    throw new Error(`useProfiles must be used within a ProfileProvider`);
  }
  return context;
};

type ProfilesProviderProps = PropsWithChildren<{}>;

const ProfilesProvider = ({ children }: ProfilesProviderProps) => {
  const [getStoredProfileId, setStoredProfileId] = useSessionStorage<
    number | null
  >("profileId", null);
  const [getStoredProfiles, setStoredProfiles] = useSessionStorage<
    ProfileI[] | null
  >("profiles", null);

  const [profileId, setProfileId] = useState<number | null>(
    getStoredProfileId(),
  );
  const [profiles, setProfiles] = useState<ProfileI[] | null>(
    getStoredProfiles(),
  );

  const setProfileIdData = useCallback(
    (data: number | null) => {
      setProfileId(data);
      setStoredProfileId(data);
    },
    [setProfileId, setStoredProfileId],
  );
  const setProfileData = useCallback(
    (data: ProfileI[] | null) => {
      setProfiles(data);
      setStoredProfiles(data);
    },
    [setProfiles, setStoredProfiles],
  );

  const value: ProfileContextI = {
    profileId,
    profiles,
    setProfileIdData,
    setProfileData,
  };
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export { ProfilesProvider, useProfiles };
