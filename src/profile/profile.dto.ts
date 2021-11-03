import { Interests, Major, StudyGroup, User } from "@prisma/client";

export interface ProfileInterface {
  email: string;
  name: string;
  isJobSeeker: boolean;
  companyEmail?: string;

  purpose: string;
  level: number;
  exp: number;
  followers: User[];
  following: User[];
  authCompany: boolean;
  profileImg: string;
  major: Major[];
  group: StudyGroup[];
  interested: Interests[];
}

export interface GetProfileFunction extends ProfileInterface {
  success: boolean;
  message?: string;
}

export interface UpdateProfileDataInterface {
  name?: string;
  purpose?: string;
  Major?: Major[];
  Interests?: Interests[];
}

export interface UpdateProfileDataWithAccessToken {
  sub: string;
  updateData: UpdateProfileDataInterface;
}
