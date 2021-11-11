import { ApiProperty } from "@nestjs/swagger";
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
  isJobSeeker?: boolean;
  companyEmail?: string;
}

export class UpdateProfileDataDTO {
  @ApiProperty({ description: "유저 이름" })
  name?: string;

  @ApiProperty({ description: "목표" })
  purpose?: string;

  @ApiProperty({ description: "전공" })
  Major?: Major[];

  @ApiProperty({ description: "흥미" })
  Interests?: Interests[];

  @ApiProperty({ description: "구인자인지" })
  isJobSeeker?: boolean;

  @ApiProperty({ description: "회사 이메일" })
  companyEmail?: string;
}
export interface UpdateProfileDataWithAccessToken {
  sub: string;
  updateData: UpdateProfileDataDTO;
}

export class UserDTO {
  @ApiProperty({ description: "유저 고유 값" })
  id: number;

  @ApiProperty({ description: "유저 구글 이메일" })
  email: string;

  @ApiProperty({ description: "유저 고유 값" })
  sub: string;

  @ApiProperty({ description: "유저 이름" })
  name: string;

  @ApiProperty({ description: "프로필 이미지 링크" })
  profileImg?: string;

  @ApiProperty({ description: "구직자인지" })
  isJobSeeker: boolean;

  @ApiProperty({ description: "회사 이메일" })
  companyEmail?: string;

  @ApiProperty({ description: "회사가 인증 되었는지" })
  authCompany?: boolean;

  @ApiProperty({ description: "유저의 목표" })
  purpose?: string;

  @ApiProperty({ description: "유저 레벨" })
  level: number;

  @ApiProperty({ description: "유저의 경험치" })
  exp: number;
}

export class MajorDTO {
  @ApiProperty({ description: "아이디" })
  id: number;

  @ApiProperty({ description: "전공 문자열" })
  major: string;
}

export class FileUploadDto {
  @ApiProperty({ type: "file" })
  file: any;
}
