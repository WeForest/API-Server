import { ApiProperty } from "@nestjs/swagger";
import { UserDTO } from "../profile/profile.dto";

export interface AboutGroup {
  sub: string;
  id: number;
}

export interface SearchGroup {
  page: number;
  keyword: string;
}

export interface CreateGroupInform {
  name: string;
  description: string;
  tags: string;
}

export class CreateGroupDTO {
  @ApiProperty({ description: "그룹 이름" })
  name: string;

  @ApiProperty({ description: "그룹 설명" })
  description: string;

  @ApiProperty({ description: "태그들, 통으로 스트링이니 주의" })
  tags: string;
}
export interface CreateGroupMethodInform extends CreateGroupInform {
  sub: string;
}

export class GroupDTO {
  @ApiProperty({ description: "그룹 고유 번호" })
  id: number;

  @ApiProperty({ description: "그룹 이름" })
  name: string;

  @ApiProperty({ description: "그룹 설명" })
  description: string;

  @ApiProperty({ description: "그룹 태그들" })
  tags: string;

  @ApiProperty({ description: "그룹 생성자 고유 번호" })
  userId: number;
}

export class GroupDTOExtendsGroupMemberDTO extends GroupDTO {
  @ApiProperty({ description: "그룹 멤버" })
  StudyMember: GroupMemberDTO[];
}

export class GroupMemberDTO {
  @ApiProperty({ description: "그룹 멤버들" })
  member: UserDTO;
}
export class CreateGroupResponseDTO {
  @ApiProperty({ description: "성공여부" })
  success: boolean;

  @ApiProperty({ description: "그룹 데이터" })
  group?: GroupDTO;
}
