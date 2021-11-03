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
