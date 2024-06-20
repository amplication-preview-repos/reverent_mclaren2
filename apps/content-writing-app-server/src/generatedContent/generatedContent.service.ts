import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GeneratedContentServiceBase } from "./base/generatedContent.service.base";

@Injectable()
export class GeneratedContentService extends GeneratedContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
