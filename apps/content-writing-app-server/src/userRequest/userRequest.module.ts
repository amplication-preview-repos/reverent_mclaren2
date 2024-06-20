import { Module } from "@nestjs/common";
import { UserRequestModuleBase } from "./base/userRequest.module.base";
import { UserRequestService } from "./userRequest.service";
import { UserRequestController } from "./userRequest.controller";
import { UserRequestResolver } from "./userRequest.resolver";

@Module({
  imports: [UserRequestModuleBase],
  controllers: [UserRequestController],
  providers: [UserRequestService, UserRequestResolver],
  exports: [UserRequestService],
})
export class UserRequestModule {}
