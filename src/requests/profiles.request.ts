import onboardingApi, {
  OnboardingApiResponse,
  ProfileI,
} from "../api/onboarding.api";

const getProfiles = async (): Promise<OnboardingApiResponse<ProfileI> | null> => {
  try {
    const response = await onboardingApi.get("/");
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getProfiles;
