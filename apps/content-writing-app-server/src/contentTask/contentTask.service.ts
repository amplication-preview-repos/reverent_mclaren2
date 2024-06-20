import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContentTaskServiceBase } from "./base/contentTask.service.base";

@Injectable()
export class ContentTaskService extends ContentTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
