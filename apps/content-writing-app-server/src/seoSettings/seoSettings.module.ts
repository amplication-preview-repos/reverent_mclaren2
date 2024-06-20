import { Module } from "@nestjs/common";
import { SeoSettingsModuleBase } from "./base/seoSettings.module.base";
import { SeoSettingsService } from "./seoSettings.service";
import { SeoSettingsController } from "./seoSettings.controller";
import { SeoSettingsResolver } from "./seoSettings.resolver";

@Module({
  imports: [SeoSettingsModuleBase],
  controllers: [SeoSettingsController],
  providers: [SeoSettingsService, SeoSettingsResolver],
  exports: [SeoSettingsService],
})
export class SeoSettingsModule {}
