import onboardingApi, {
  OnboardingApiResponse,
  ProfileI,
} from "../api/onboarding.api";

const getProfiles = async (): Promise<OnboardingApiResponse<ProfileI> | null> => {
  try {
    const response = await onboardingApi.get("/");
    return response.data;
  } catch (error) {
    return null;
  }
};

const getProfile = async (
  id: number,
): Promise<Pick<OnboardingApiResponse<ProfileI>, "data"> | null> => {
  try {
    const response = await onboardingApi.get(`/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
};

export { getProfile };
export default getProfiles;
