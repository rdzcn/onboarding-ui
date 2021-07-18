import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import useSessionStorage from "../hooks/useSessionStorage";

export type ProfileContextI = {
  profileId: number | null;
  setProfileIdData: (data: number | null) => void;
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

  const [profileId, setProfileId] = useState<number | null>(
    getStoredProfileId(),
  );

  const setProfileIdData = useCallback(
    (data: number | null) => {
      setProfileId(data);
      setStoredProfileId(data);
    },
    [setProfileId, setStoredProfileId],
  );

  const value: ProfileContextI = {
    profileId,
    setProfileIdData,
  };
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export { ProfilesProvider, useProfiles };
