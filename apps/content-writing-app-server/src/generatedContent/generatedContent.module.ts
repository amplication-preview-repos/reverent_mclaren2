import { Module } from "@nestjs/common";
import { GeneratedContentModuleBase } from "./base/generatedContent.module.base";
import { GeneratedContentService } from "./generatedContent.service";
import { GeneratedContentController } from "./generatedContent.controller";
import { GeneratedContentResolver } from "./generatedContent.resolver";

@Module({
  imports: [GeneratedContentModuleBase],
  controllers: [GeneratedContentController],
  providers: [GeneratedContentService, GeneratedContentResolver],
  exports: [GeneratedContentService],
})
export class GeneratedContentModule {}
