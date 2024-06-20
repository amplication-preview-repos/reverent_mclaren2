import { Module } from "@nestjs/common";
import { ContentTaskModuleBase } from "./base/contentTask.module.base";
import { ContentTaskService } from "./contentTask.service";
import { ContentTaskController } from "./contentTask.controller";
import { ContentTaskResolver } from "./contentTask.resolver";

@Module({
  imports: [ContentTaskModuleBase],
  controllers: [ContentTaskController],
  providers: [ContentTaskService, ContentTaskResolver],
  exports: [ContentTaskService],
})
export class ContentTaskModule {}
