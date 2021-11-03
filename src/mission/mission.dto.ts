export interface CreateMission {
  level: number;
  exp: number;
  title: string;
  content: string;
  expiredAt: number;
  type?: "daily" | "weekly" | "monthly"; // daily, weekly, monthly
}

export type MissionType = "daily" | "weekly" | "monthly";
