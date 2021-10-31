import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class MissionService {
  constructor(private prisma: PrismaService) {}
}
