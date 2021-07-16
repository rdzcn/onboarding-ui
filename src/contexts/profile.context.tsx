import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { ProfileI } from "../api/onboarding.api";

export type ProfileContextI = {
  profileId: number | null;
  profiles: null | ProfileI[];
  setProfileId: (id: number | null) => void;
  setProfileData: (data: ProfileI[] | null) => Promise<void>;
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
  const [getStoredProfiles, setStoredProfiles] = useLocalStorage<
    ProfileI[] | null
  >("profiles", null);

  const [profiles, setProfiles] = useState<ProfileI[] | null>(
    getStoredProfiles(),
  );
  const [profileId, setProfileId] = useState<number | null>(null);

  const setProfileData = useCallback(
    async (data: ProfileI[] | null) => {
      setProfiles(data);
      setStoredProfiles(data);
    },
    [setProfiles, setStoredProfiles],
  );

  const value: ProfileContextI = {
    profileId,
    profiles,
    setProfileId,
    setProfileData,
  };
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export { ProfilesProvider, useProfiles };
