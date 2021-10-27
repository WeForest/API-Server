export interface ProfileInterface {
  email: string;
  name: string;
  isJobseeker: boolean;
  companyEmail?: string;

  purpose: string;
  level: number;
  exp: number;
}

export interface GetProfileFunction extends ProfileInterface {
  success: boolean;
  message?: string;
}
