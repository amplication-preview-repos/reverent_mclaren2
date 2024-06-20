import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SeoSettingsServiceBase } from "./base/seoSettings.service.base";

@Injectable()
export class SeoSettingsService extends SeoSettingsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
