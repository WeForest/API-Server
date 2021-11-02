import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}
}
