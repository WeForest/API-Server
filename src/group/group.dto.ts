import { ApiProperty } from "@nestjs/swagger";

export interface AboutGroup {
  sub: string;
  id: number;
}

export interface CreateGroupInform {
  name: string;
  description: string;
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
  ownerId: number;
}
