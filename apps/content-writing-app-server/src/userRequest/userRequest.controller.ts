import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserRequestService } from "./userRequest.service";
import { UserRequestControllerBase } from "./base/userRequest.controller.base";

@swagger.ApiTags("userRequests")
@common.Controller("userRequests")
export class UserRequestController extends UserRequestControllerBase {
  constructor(protected readonly service: UserRequestService) {
    super(service);
  }
}
