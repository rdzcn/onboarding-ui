import axios from "axios";

export interface ProfileI {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface OnboardingApiResponse<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
}

const onboardingApi = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default onboardingApi;
