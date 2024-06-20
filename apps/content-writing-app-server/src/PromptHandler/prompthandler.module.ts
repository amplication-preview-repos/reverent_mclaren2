import { Module } from "@nestjs/common";
import { PromptHandlerService } from "./prompthandler.service";
import { PromptHandlerController } from "./prompthandler.controller";
import { PromptHandlerResolver } from "./prompthandler.resolver";

@Module({
  controllers: [PromptHandlerController],
  providers: [PromptHandlerService, PromptHandlerResolver],
  exports: [PromptHandlerService],
})
export class PromptHandlerModule {}
